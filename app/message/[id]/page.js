import React from 'react';
import Greeting_land from '../../components/greetings_land';

export async function generateMetadata({ params }) {
  const url_params = await params
  const [name, message] = await url_params?.id?.split('-').map(decodeURIComponent);

  return {
    title: `Greeting from ${name}`,
    description: message,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://disco-khaki.vercel.app/message/${url_params?.id}`,
      title: `Greeting from ${name}`,
      description: message,
      images: [
        {
          url: "/image/preview.png",
          width: 1200,
          height: 630,
          alt: "Greeting Card Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://disco-khaki.vercel.app/message/${params?.id}",
      title: `Greeting from ${name}`,
      description: message,
      images: [ "/image/preview.png"],
    },
  };
}

export default async function  Page({ params }) {
  // Extract `id` and split into name and message
  const url_params = await params
  const [name, message] =  url_params?.id?.split('-').map(decodeURIComponent);

  return (
    <Greeting_land name={name} message={message} />
  );
}
