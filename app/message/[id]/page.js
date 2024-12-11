import React from 'react';
import Greeting_land from '../../components/greetings_land';
import preview from "/image/preview.png"

export async function generateMetadata({ params }) {
  // Extract `id` from params and decode it for name and message
  const [name, message] = params.id.split('-').map(decodeURIComponent);

  return {
    title: `Greeting for ${name}`,
    description: message,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://disco-khaki.vercel.app/message/${params.id}`,
      title: `Greeting for ${name}`,
      description: message,
      images: [
        {
          url: preview,
          width: 1200,
          height: 630,
          alt: "Greeting Card Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourTwitterHandle",
      title: `Greeting for ${name}`,
      description: message,
      images: [preview],
    },
  };
}

export default function Page({ params }) {
  // Extract `id` and split into name and message
  const [name, message] = params.id.split('-').map(decodeURIComponent);

  return (
    <Greeting_land name={name} message={message} />
  );
}
