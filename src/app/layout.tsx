import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "טולי אציל | תומכת לפני ואחרי לידה",
  description: "ליווי חם ומקצועי לאמהות, אבות ומשפחות בהיריון ואחרי הלידה. דולה לאחר לידה, ליווי הנקה, תמיכת לילה ואימון משפחתי.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
