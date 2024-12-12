"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Greeting_land() {
  const params = useParams(); // Access dynamic route parameters
  const router = useRouter();
  const id = params.id; // Extract the "id" parameter from the route
  const [name, message] = id.split("-").map(decodeURIComponent);
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    const video = document.getElementById("background-video");
    video.play();
    setIsOpen(false); // Close the overlay
  };

  // List of predefined Christmas messages
  const randomMessages = [
    "Wishing you a magical holiday season! 🎄",
    "May your Christmas be merry and bright! ✨",
    "Sending warm hugs and holiday cheer! 🎅",
    "Celebrate the joy of the season! 🌟",
    "Have yourself a cozy little Christmas! ❄️",
  ];

  return (
    <div className="min-h-screen rounded-lg shadow-xl mx-auto bg-christmas bg-cover text-center flex flex-col items-center justify-center text-snow-white relative">
      {/* Overlay */}
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-30">
          <div className="text-center max-w-xl mx-auto">
            <img
              src="/image/preview.png"
              alt="Click here"
              className="w-1/2 max-w-60 mx-auto animate-bounce"
            />
            <div className="mx-auto clipped_arrow rotate-90 animate-bounce"></div>
            <p className="text-xl font-bold text-black mt-4">
              Click here to open your message
            </p>
            👉🏽
            <button
              onClick={handleOpen}
              className="animate-bounce bg-red-800 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-600 transition-transform duration-300 ease-in-out"
            >
              Open Message
            </button>{" "}
            👈🏽
          </div>
        </div>
      )}

      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        preload="metadata"
        loop
        muted
        playsInline
      >
        <source src="/video/christmas_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Message Content */}
      <div className="relative max-w-[90%] shadow-neutral-400 z-20 lg:max-w-lg py-12 bg-opacity-80 bg-black p-6 rounded-3xl overflow-hidden shadow-lg w-full mt-24">
        <div>
          <video
            id="background-video"
            className="absolute inset-0 w-full h-full object-cover -z-10"
            preload="metadata"
            loop
            controls={false} // Optional: Hide default controls
          >
            <source src="/video/christmas_share_bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-20 p-6 bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-4 text-center">
            <span className="text-5xl block leading-tight uppercase font-bold text-center animate-gradient bg-gradient-to-r from-red-500 via-yellow-500 to-gold bg-clip-text text-transparent">
              {name.replaceAll("%20", " ")}
            </span>
            <p className="text-xl text-white mt-2">wishes you a</p>
            <img
              src="/image/animated_chris.png"
              alt="Merry Christmas"
              className="mx-auto mt-6 w-2/3 animate-bounce"
            />
          </h1>
          <p className="text-xl mb-8 text-center text-white animate-pulse">
            {randomMessages[message] || randomMessages[0]}
          </p>
          <Link href={"/greet"}>
            <button className="bg-red-600 shadow-xl shadow-amber-400 animate-bounce px-6 py-3 rounded-lg text-base text-white hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-105">
              Create Your Own Greeting
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
