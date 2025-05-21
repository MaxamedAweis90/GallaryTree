"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center text-center px-4 transition-all duration-800 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        🌳 Welcome to <span className="text-white">GalleryTree</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        Organize, browse, and showcase your memories in a sleek, modern gallery.
      </p>
      <Link href="https://app-gallerytree.vercel.app">
        <button className="btn bg-purple-600 hover:bg-purple-700 text-white text-lg flex items-center gap-2">
          🚀 Launch App
        </button>
      </Link>
    </section>
  );
}
