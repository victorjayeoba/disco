"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Greet() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Wishing you a magical holiday season! 🎄");
  const [generatedLink, setGeneratedLink] = useState("");
  const router = useRouter();

  // List of predefined Christmas messages
  const randomMessages = [
    "Wishing you a magical holiday season! 🎄",
    "May your Christmas be merry and bright! ✨",
    "Sending warm hugs and holiday cheer! 🎅",
    "Celebrate the joy of the season! 🌟",
    "Have yourself a cozy little Christmas! ❄️",
  ];

  // Function to generate a random message
  const handleGenerateMessage = () => {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    setMessage(randomMessages[randomIndex]);
  };
``
  const handleGenerate = () => {
    if (name && message) {
      const encodedName = encodeURIComponent(name);
    
      let index = randomMessages.indexOf(message);

      if (index !== -1) {
          console.log(`Message found at index: ${index}`);
          const encodedMessage = index.toString();
          const url = `${window.location.origin}/${encodedName}-${encodedMessage}`;
          setGeneratedLink(url);
      } else {
          console.log("Message not found in the array.");
      }
    }
  };

  const handleShare = (platform) => {
    if (!generatedLink) return;

    const shareMessage = `Check out my Christmas greeting! 🎄✨ ${generatedLink}`;
    switch (platform) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage)}`, "_blank");
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(generatedLink)}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-christmas bg-cover flex flex-col items-center justify-center text-snow-white relative">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/1211.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Content */}
      <div className="relative bg-opacity-80 bg-black p-6 rounded-lg shadow-lg w-full max-w-sm mx-4 sm:mx-0 sm:w-96">
        <h1 className="text-3xl font-bold text-center mb-6 animate-bounce">
          🎁 Enter your name 👇🏽
        </h1>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-3 py-2 rounded-lg text-black focus:outline-none focus:ring focus:ring-christmas-green animate-bounce"
        required/>
        <div className="relative mb-4">
          <textarea
            placeholder="Your Christmas Message"
            value={message}
            maxLength={60}
            onChange={(e) => setMessage(e.target.value)}
            disabled={true}
            className="w-full px-3 py-2 pb-7 rounded-lg text-black focus:outline-none focus:ring focus:ring-christmas-green disabled:bg-white"
            rows="2"
          ></textarea>
          {/* Dice Button */}
          <button
            onClick={handleGenerateMessage}
            className="absolute bottom-2 right-2 bg-christmas-green w-11 h-11 rounded-full hover:bg-christmas-red transition"
            aria-label="Generate Random Message"
          >
            🎲
          </button>
        </div>

        {/* Generate and Share Section */}
        {!generatedLink ? (
          <button
            onClick={handleGenerate}
            className="w-full bg-christmas-green py-2 rounded-lg hover:bg-christmas-red transition font-semibold"
          >
            Generate Link
          </button>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-sm mt-4 mb-2 text-center">
              Share your link with loved ones!👇🏽
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleShare("whatsapp")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                WhatsApp
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Facebook
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
              >
                Twitter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
