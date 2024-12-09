import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-christmas bg-cover relative text-snow-white flex">
      {/* Background Video */}
      <video
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-auto h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        style={{ minHeight: '100vh' }}
      >
        <source src="/video/christmastree_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">
          🎄 Create & Share Christmas Cheer! 🎅
        </h1>
        <p className="text-lg max-w-md mb-8">
          Make the holiday season extra special with a personalized Christmas greeting.
          Add your message and generate a custom link for friends and family!
        </p>
        <Link href="/greet">
          <button className="bg-christmas-red px-6 py-3 rounded-lg text-lg hover:bg-christmas-green transition">
            Create Your Greeting
          </button>
        </Link>
      </div>
    </div>
  );
}
