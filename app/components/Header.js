"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-christmas-green text-snow-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Website Name */}
       
        {/* Ad Section */}
        <div className="mt-2 w-full flex justify-end">
          <div className="bg-white text-black p-2 rounded-lg shadow-md text-sm max-w-xs md:max-w-sm lg:max-w-md">
            <p className="text-center font-medium">Place your ad here! 🎁</p>
          </div>
        </div>
      </div>
    </header>
  );
}
