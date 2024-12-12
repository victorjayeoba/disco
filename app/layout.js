"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { useEffect } from "react";
import Head from "next/head";

// Fonts
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

export default function RootLayout({ children }) {
  useEffect(() => {
    // Dynamically add the Adsterra script to the page
    const script = document.createElement("script");
    script.src = "/invoke.js"; // Ensure the invoke.js is in your public folder
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Meta tags and Ad script */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Create Your Greeting Card</title>
          <meta name="description" content="Personalized greeting cards with unique designs and messages." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content="https://disco-khaki.vercel.app" />
          <meta property="og:title" content="Create Your Greeting Card" />
          <meta property="og:description" content="Personalized greeting cards with unique designs and messages." />
          <meta property="og:image" content="/image/preview.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@VickyJya_media" />
          <meta name="twitter:title" content="Create Your Greeting Card" />
          <meta name="twitter:description" content="Personalized greeting cards with unique designs and messages." />
          <meta name="twitter:image" content="/image/preview.png" />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : '23eaf078b2358e0ba06e4148e72c28fc',
                  'format' : 'iframe',
                  'height' : 60,
                  'width' : 468,
                  'params' : {}
                };
              `,
            }}
          />
        </Head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* Render Header and children */}
        <Header />
        {children}
      </body>
    </html>
  );
}
