import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen px-4 to-black">
      <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 ">
        🚀 Welcome to <span className="text-white text-nowrap">SheekoChat</span> 🎉
      </h1>
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 mb-9 max-w-2xl">
        Connect, chat, and share stories with ease! 💬✨
      </p>
      <Link href="https://app-sheekochat.netlify.app/">
        <button className="bg-yellow-500 hover:bg-yellow-200 hover:scale-105 text-black font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2">
          Launch App
        </button>
      </Link>
    </div>
  );
};

export default Hero;
