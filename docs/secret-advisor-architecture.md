# Secret Advisor — Phase 1 Architecture Proposal

**Status:** Proposal — awaiting review before any code is written.
**Scope:** Phase 1 only — chat UI with typing effect, RTL Hebrew support, static icebreaker chips, persona prompt v1, anonymous UUID identity. No memory, no emails, no calendar.

> ⚠️ **Blocking note — the spec is not in the repository.** `secret-advisor-spec.md` does not exist on any branch of this repo, and the linked claude.ai share page is not machine-readable (it renders client-side and the API behind it requires the owner's login). Everything below is grounded in (a) the Phase 1 scope as described in the task, (b) the existing codebase, and (c) inferred product context. **Please commit `secret-advisor-spec.md` to the repo root** so the section-2 experience principles and section-10 phasing can be verified before we build. Sections marked "(verify against spec)" are assumptions, not facts.

---

## 1. Product context (as inferred)

The repo hosts the marketing site for **טולי אציל** — postpartum doula, lactation support, night support, and family coaching. The site is already Hebrew-first and RTL (`<html lang="he" dir="rtl">`, Heebo font, cream/terracotta/olive/charcoal palette).

"Secret Advisor" (היועצת הסודית) is understood to be an AI chat persona embedded in this site: a warm, discreet advisor in Tully's voice that new and expecting parents can talk to anonymously. The "secret" framing implies **anonymity and low-pressure intimacy** are core to the experience — which aligns with the anonymous-UUID requirement and (presumably) with section 2 of the spec.

### Inferred experience principles (verify against spec §2)

Since I cannot read section 2, these are the principles I will treat as non-negotiable until corrected:

1. **Warm and human, never clinical or bot-like.** The typing effect exists to make the advisor feel present, not to show off streaming tech.
2. **Hebrew-first, natively RTL.** Not a translated LTR app — layout, punctuation, and mixed-direction text must feel right.
3. **Anonymous and judgment-free.** No sign-up, no email wall, no tracking beyond the anonymous UUID. Nothing that makes a vulnerable 3am user feel observed.
4. **Safe.** Postpartum context means postpartum depression, medical questions, and crisis moments will come up. The persona must know its limits and warmly redirect to Tully or professional/emergency help.
5. **Effortless start.** Icebreaker chips exist so a hesitant user never faces a blank input box.

Every decision below is justified against these. If spec §2 differs, decisions get re-derived.

---

## 2. Architecture overview

**Stay inside the existing Next.js 14 App Router app.** No new service, no separate frontend. The chat is a new route plus one API route handler, sharing the site's Tailwind theme and fonts so the advisor feels like part of Tully's home, not a bolted-on widget.

```
Browser (RTL chat UI, React client components)
  │  POST /api/advisor/chat   { uuid, messages[] }  — full history each turn (stateless server)
  ▼
Next.js Route Handler (Node runtime)
  │  • attaches persona system prompt (server-side only, versioned "v1")
  │  • basic per-UUID rate limiting
  │  • calls Anthropic Messages API with streaming
  ▼
Anthropic API (claude-opus-5, streaming)
  │
  ▼  SSE / ReadableStream back to browser → paced "typing" reveal
```

**Statelessness is the Phase 1 superpower.** No database, no session store. The client holds the conversation in React state and sends the full history each turn. The anonymous UUID travels with every request purely as a forward-compatible identity handle (and rate-limit key) — Phase 2 memory can attach to it without changing the client contract.

### Key decisions

| Decision | Choice | Rationale |
|---|---|---|
| Placement | Dedicated page `/advisor` + entry points from the existing site (nav item, optional floating button next to WhatsApp) | A full page gives the intimate, focused feel; a cramped popup widget fights principle 1. **(verify against spec — see open questions)** |
| LLM | Anthropic Messages API, `claude-opus-5`, streaming, `output_config: {effort: "low"}` | Best conversational quality in Hebrew; `effort: low` keeps latency chat-appropriate. Model ID lives in one config constant so it can be swapped after cost testing. |
| Typing effect | **Real token streaming + client-side paced reveal** (smoothing buffer that reveals characters at a human-ish cadence, draining faster when the buffer grows) | Feels alive *and* honest. A fake typewriter over a complete response doubles perceived latency; raw token chunks arrive in bursts that look mechanical. The pacing layer gives the warm "she's typing to me" feel the spec presumably wants. |
| Identity | `crypto.randomUUID()` generated client-side on first visit, persisted in `localStorage`, sent as an `X-Advisor-Uuid` header | No cookie banner implications, trivially simple, survives revisits on the same browser. Server treats it as opaque. Phase 2 can migrate/augment without breaking anything. |
| Persona prompt | Server-side constant, never shipped to the client, tagged `PERSONA_VERSION = "v1"` | Keeps the persona private and iterable; version tag lets us correlate behavior with prompt versions later. |
| Icebreakers | Static Hebrew strings in a config file, rendered as chips over the empty conversation; clicking sends the text as the first user message | Static per Phase 1 scope. Config file (not hardcoded in the component) so Tully can review/edit the copy in one place. |
| Safety | Guardrails inside persona v1: warm boundaries on medical/mental-health topics, explicit escalation guidance (contact Tully, ער"ן 1201, emergency 101) + handling of `stop_reason: "refusal"` | Non-negotiable given the audience, regardless of whether the spec spells it out. |
| Rate limiting | Minimal in-memory per-UUID + per-IP throttle in the route handler | The endpoint is anonymous and calls a paid API; shipping it with zero abuse control would be negligent even in Phase 1. In-memory is fine on a single instance; noted as a deploy-time consideration for serverless. |
| API key | `ANTHROPIC_API_KEY` env var, server-side only | Standard. Never exposed to client. |

---

## 3. Proposed file structure

New files only — nothing existing moves:

```
src/
├── app/
│   ├── advisor/
│   │   ├── page.tsx                  # Server component: metadata (he), renders <ChatShell/>
│   │   └── layout.tsx                # Advisor-specific chrome (minimal — no site navbar clutter)
│   └── api/
│       └── advisor/
│           └── chat/
│               └── route.ts          # POST: validate → rate-limit → persona + history → stream Anthropic response
│
├── components/
│   └── advisor/
│       ├── ChatShell.tsx             # Client component; owns conversation state, wires hook to UI
│       ├── MessageList.tsx           # Scroll container, auto-scroll-to-bottom (RTL-aware)
│       ├── MessageBubble.tsx         # One message; dir="auto" per bubble for mixed he/en content
│       ├── TypingIndicator.tsx       # Animated "advisor is typing" dots (pre-first-token)
│       ├── Composer.tsx              # Input + send; Enter-to-send, RTL input, disabled while streaming
│       └── IcebreakerChips.tsx       # Static chips shown on empty conversation
│
├── hooks/
│   └── useAdvisorChat.ts             # State machine: idle→sending→streaming→done/error;
│                                     # consumes the stream, feeds the paced-reveal buffer
│
└── lib/
    └── advisor/
        ├── persona.ts                # PERSONA_V1 system prompt + PERSONA_VERSION (server-only)
        ├── icebreakers.ts            # Static Hebrew icebreaker strings
        ├── identity.ts               # getOrCreateAdvisorUuid() — localStorage + crypto.randomUUID()
        ├── rateLimit.ts              # Tiny in-memory per-UUID/IP throttle
        ├── types.ts                  # ChatMessage, ChatRequest, stream event types
        └── config.ts                 # Model id, max_tokens, effort, history cap, typing cadence
```

~13 new files. Server/client boundary is explicit: everything under `lib/advisor/persona.ts` and `rateLimit.ts` is imported only by the route handler (enforced with the `server-only` package so a client import fails the build).

### Request contract

```ts
// POST /api/advisor/chat
// headers: { "X-Advisor-Uuid": "<uuid>" }
{ messages: Array<{ role: "user" | "assistant"; content: string }> }  // capped length
// → text/event-stream of token deltas, then a done/error terminator event
```

History is capped (e.g. last ~30 messages / ~8k chars) both to bound cost and because Phase 1 promises no long-term memory.

### RTL specifics (they're small but they're the difference between "supports Hebrew" and "feels Hebrew")

- Inherit `dir="rtl"` from the root layout; use Tailwind **logical properties** (`ms-*`, `me-*`, `ps-*`, `text-start`, `rounded-s-*`) so bubbles/chips/composer flow correctly without left/right hacks.
- `dir="auto"` + `unicode-bidi: plaintext` on each message bubble so a message mixing Hebrew with English terms or numbers ("מה זה cluster feeding?") renders correctly.
- The streaming reveal appends text — no caret positioning issues in RTL, another reason streaming beats a cursor-based typewriter.
- Advisor bubbles align to the start (right), user bubbles to the end (left) — matching Hebrew messenger conventions.

### Streaming + typing-effect mechanics

Route handler uses `client.messages.stream(...)` (Anthropic SDK) and pipes `text_delta` events into a `ReadableStream` as SSE. Client reads the stream into a buffer; a small pacing loop reveals it at ~30–60 chars/sec with slight jitter, accelerating when the buffer backs up so we never lag far behind the model. `TypingIndicator` shows between send and first token. Errors mid-stream degrade gracefully: show what arrived + a gentle Hebrew retry message. `stop_reason: "refusal"` (possible on Opus 5) maps to a warm in-persona fallback line rather than an error state.

---

## 4. Flags: unclear points & things I'd do differently

**Unclear (blocked on spec / need your answer):**

1. **The spec file itself is missing** — commit `secret-advisor-spec.md` so §2 principles and §10 phasing can be verified. This is the only true blocker.
2. **Where does the chat live?** I've proposed a dedicated `/advisor` page with entry points from the main site. If the spec says floating widget / separate domain / WhatsApp-style overlay, the component tree survives but layout work changes.
3. **Name & URL slug.** Is the product surface Hebrew-named (e.g. `/היועצת` or `/yoetzet`)? I defaulted to `/advisor`.
4. **Disclosure.** Should the advisor present as "Tully" or clearly as an AI assistant in Tully's spirit? I'd strongly recommend the latter (a one-line disclosure under the header) — both ethically and legally safer, and it doesn't cost warmth. Persona v1 will be written this way unless the spec says otherwise.
5. **Logging policy.** "Secret" implies we should *not* log message content server-side in Phase 1. I'll log only metadata (uuid, timestamps, token counts, errors). Confirm.

**Things I'd do differently than a naive reading of the scope:**

1. **Typing effect = real streaming with pacing, not a fake typewriter.** (Rationale in §2. If the spec literally mandates a fixed-speed typewriter over a buffered response, I'd push back — it inflates perceived latency 2×, which fights the "present and human" principle.)
2. **Add minimal rate limiting now, not in a later phase.** An anonymous public endpoint fronting a paid LLM without any throttle is an incident waiting to happen. It's ~40 lines.
3. **Bake safety/escalation into persona v1 even if the spec defers it.** Postpartum users in distress will find this chat. A persona that can't handle "אני לא מצליחה להפסיק לבכות" safely is not shippable at any phase.
4. **Cap conversation length client- and server-side.** Keeps cost bounded and honestly reflects the no-memory phase (very long "sessions" would create a false expectation of continuity).

**Deferred by design (Phase 2+), but the architecture leaves the seams:**
- Memory → keyed by the same UUID; server gains a store, client contract unchanged.
- Emails / calendar → new route handlers under `/api/advisor/*`; persona and chat shell untouched.
- Prompt caching for the persona prefix (worth adding once the persona stabilizes; requires the prompt to be a frozen prefix — the proposed structure already ensures that).

---

## 5. Phase 1 acceptance checklist

- [ ] `/advisor` renders the chat, fully RTL, in the site's visual language (Heebo, cream/terracotta palette)
- [ ] Empty state shows static Hebrew icebreaker chips; clicking one starts the conversation
- [ ] Messages stream with a human-paced typing effect + typing indicator before first token
- [ ] Mixed Hebrew/English/number content renders correctly in both bubble types
- [ ] Anonymous UUID created on first visit, persisted, sent on every request; no other identity
- [ ] Persona v1 (server-side, versioned): Tully's warm voice, AI disclosure, safety boundaries + escalation lines
- [ ] Refusals, network errors, and rate-limit responses all degrade into warm Hebrew fallback copy
- [ ] No message content logged; no memory, email, or calendar code anywhere
