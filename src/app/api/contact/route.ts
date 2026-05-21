import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function buildEmailHtml(name: string, phone: string, message: string): string {
  return `
<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>פניה מאתר TULLYBABY</title>
</head>
<body style="margin:0;padding:0;background:#F5EDE5;font-family:'Helvetica Neue',Arial,sans-serif;direction:rtl;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EDE5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#C4704A 0%,#A05835 100%);border-radius:20px 20px 0 0;padding:40px 48px;text-align:right;">
              <p style="margin:0 0 6px 0;color:rgba(255,255,255,0.75);font-size:12px;letter-spacing:3px;text-transform:uppercase;">פניה חדשה</p>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;line-height:1.2;">TULLYBABY</h1>
              <p style="margin:6px 0 0 0;color:rgba(255,255,255,0.85);font-size:14px;">תומכת לפני ואחרי לידה</p>
              <div style="margin-top:24px;height:2px;background:rgba(255,255,255,0.2);border-radius:2px;"></div>
              <p style="margin:16px 0 0 0;color:rgba(255,255,255,0.9);font-size:13px;">
                📩 התקבלה פניה חדשה דרך האתר
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 48px;">

              <p style="margin:0 0 24px 0;font-size:13px;color:#C4704A;font-weight:600;letter-spacing:2px;text-transform:uppercase;">פרטי הפונה</p>

              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#FDF5EE;border-radius:12px;padding:16px 20px;border-right:4px solid #C4704A;">
                    <p style="margin:0 0 4px 0;font-size:11px;color:#8A7A72;font-weight:600;letter-spacing:1px;text-transform:uppercase;">שם מלא</p>
                    <p style="margin:0;font-size:18px;color:#2C2420;font-weight:600;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Phone -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#FDF5EE;border-radius:12px;padding:16px 20px;border-right:4px solid #6B7A4E;">
                    <p style="margin:0 0 4px 0;font-size:11px;color:#8A7A72;font-weight:600;letter-spacing:1px;text-transform:uppercase;">טלפון</p>
                    <p style="margin:0;font-size:18px;color:#2C2420;font-weight:600;direction:ltr;text-align:right;">${phone}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              ${message ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#F8F4F0;border-radius:12px;padding:20px 20px;border-right:4px solid #8A7A72;">
                    <p style="margin:0 0 8px 0;font-size:11px;color:#8A7A72;font-weight:600;letter-spacing:1px;text-transform:uppercase;">הודעה</p>
                    <p style="margin:0;font-size:15px;color:#2C2420;font-weight:300;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
                  </td>
                </tr>
              </table>
              ` : ""}

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="right">
                    <a href="tel:${phone.replace(/[^0-9+]/g, "")}"
                      style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:100px;font-size:14px;font-weight:600;margin-left:12px;">
                      📞 התקשרי עכשיו
                    </a>
                    <a href="https://wa.me/972${phone.replace(/[^0-9]/g, "").replace(/^0/, "")}"
                      style="display:inline-block;background:#C4704A;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:100px;font-size:14px;font-weight:600;">
                      💬 WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#2C2420;border-radius:0 0 20px 20px;padding:24px 48px;text-align:right;">
              <p style="margin:0;color:rgba(255,255,255,0.5);font-size:12px;line-height:1.6;">
                הודעה זו נשלחה אוטומטית מאתר <strong style="color:rgba(255,255,255,0.8);">tullybaby.com</strong>
                <br/>טולי אציל · תומכת לפני ואחרי לידה
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message } = body as { name: string; phone: string; message?: string };

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "שם וטלפון הם שדות חובה" }, { status: 400 });
    }

    const html = buildEmailHtml(name.trim(), phone.trim(), message?.trim() ?? "");

    const resend = new Resend(process.env.RESEND_API_KEY!);
    const { error } = await resend.emails.send({
      from: "TULLYBABY <onboarding@resend.dev>",
      to: ["atzilul@gmail.com"], // tullygrad@gmail.com יתווסף לאחר אימות דומיין ב-resend.com/domains
      subject: `פניה חדשה מאתר TULLYBABY — ${name.trim()}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "שגיאה בשליחת המייל", detail: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "שגיאה פנימית" }, { status: 500 });
  }
}
