import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

// Runs before paint so the saved/system theme is applied with no flash of the wrong theme.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

// og:image / twitter:image are injected automatically by the file-convention
// routes app/opengraph-image.jsx + app/twitter-image.jsx (1200×630).
// TODO(viet): confirm OG copy (title / description) if you want it tweaked.
const siteUrl = "https://viethq-pflio.vercel.app";
const title = "Ha Quoc Viet — Full-Stack Developer & Tech Lead";
const description =
  "Ha Quoc Viet (VietHQ) — Full-Stack Developer & Tech Lead based in Hanoi, Vietnam. 6 years building fast, reliable web platforms end-to-end, from React & Next.js front-ends to Node & NestJS back-ends.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ha Quoc Viet — VietHQ",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
