import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

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
          url: "https://www.pngmart.com/files/11/Father-Christmas-PNG-Transparent-Image.png",
          width: 1200,
          height: 630,
          alt: "Greeting Card Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@VickyJya_medi",
      title: "Create Your Greeting Card",
      description: "Personalized greeting cards with unique designs and messages.",
      images: ["https://www.pngmart.com/files/11/Father-Christmas-PNG-Transparent-Image.png"],
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
