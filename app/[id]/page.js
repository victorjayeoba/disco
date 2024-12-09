"use client";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function Greeting() {
  const params = useParams(); // Access dynamic route parameters
  const router = useRouter();
  const id = params.id; // Extract the "id" parameter from the route
  const [name, message] = id.split("-").map(decodeURIComponent);

if(window != undefined){
  window.addEventListener("click",()=>{
    console.log(document.getElementsByTagName("audio"))
  })
}

  // List of predefined Christmas messages
  const randomMessages = [
    "Wishing you a magical holiday season! 🎄",
    "May your Christmas be merry and bright! ✨",
    "Sending warm hugs and holiday cheer! 🎅",
    "Celebrate the joy of the season! 🌟",
    "Have yourself a cozy little Christmas! ❄️",
  ];

  return (
    <div className="min-h-screen rounded-lg shadow-xl  mx-auto bg-christmas bg-cover text-center flex flex-col items-center justify-center text-snow-white relative">
      {/* Video Background */}
    
     
      <video
    className="absolute inset-0 w-full h-full object-cover z-99"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/video/christmas_bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

      {/* Message Content */}
      <div className="relative max-w-[90%] shadow-neutral-400 z-20 lg:max-w-lg py-12 bg-opacity-80 bg-black p-6 rounded-3xl overflow-hidden shadow-lg w-full mt-24">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover -z-10"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/video/1208.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>



  {/* Content Overlay */}
  <div className='bg-black bg-opacity-25 absolute inset-0 w-full h-full object-cover -z-10'></div>
  <div className="relative z-20 p-6 bg-opacity-80  rounded-lg shadow-lg">
    <h1 className="text-3xl mb-4 text-center">
      <span className="text-5xl block leading-tight uppercase font-bold text-gold text-center">
   {name.replaceAll("%20" ,' ')}
</span>
<br />
     <span className='italic font-medium  shadow-2xl'>wishes you a Merry Christmas and Happy New Year, 🎅!</span> 
    </h1>
    <p className="text-xl mb-8 text-center">{randomMessages[message]}</p>
    <Link href={"/greet"}>
      <button className="bg-christmas-red px-6 py-3 rounded-lg text-base text-white hover:bg-christmas-green animate-bounce transition-transform duration-300 ease-in-out hover:scale-105">
        Create Your Own Greeting
      </button>
    </Link>
  </div>
</div>
    <audio
          className="hidden"
          autoPlay
          loop
          
        >
          <source src="/sounds/jingle_bell_sound.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
    </div>
  );
}
