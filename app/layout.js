import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import preview from "../public/image/preview.png"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata({ pathname }) {
  const defaultMetadata = {
    title: "Create Your Greeting Card",
    description: "Personalized greeting cards with unique designs and messages.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://disco-khaki.vercel.app${pathname}`,
      title: "Create Your Greeting Card",
      description: "Personalized greeting cards with unique designs and messages.",
      images: [
        {
          url:preview,
          width: 1200,
          height: 630,
          alt: "Greeting Card Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@VickyJya_media",
      title: "Create Your Greeting Card",
      description: "Personalized greeting cards with unique designs and messages.",
      images: [preview],
    },
  };

  return defaultMetadata;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Head metadata automatically managed by Next.js */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
