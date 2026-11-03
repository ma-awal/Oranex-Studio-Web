import "./globals.css";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { SITE_URL, SEO, site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: `%s | ${site.name}` },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: SITE_URL, siteName: site.name, title: SEO.title, description: SEO.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} – ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description, images: ["/og.png"] },
};

export const viewport = { themeColor: "#0b0f1a" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
      <head>
        {/* JS off thakleo scroll-reveal er content jate dekha jay */}
        <noscript><style>{".reveal{opacity:1!important;transform:none!important}"}</style></noscript>
      </head>
      <body className="bg-ink font-sans text-white">{children}</body>
    </html>
  );
}
