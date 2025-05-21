"use client";

import { useRef, useState, useEffect } from "react";

export default function Contact() {
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
      id="contact"
      ref={ref}
      className={`py-20 px-4 transition-all duration-800 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 text-white">
        Get in Touch
      </h2>
      <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
        <input
          className="p-3 rounded-lg bg-white/10 placeholder-gray-400 text-white"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="p-3 rounded-lg bg-white/10 placeholder-gray-400 text-white"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="p-3 rounded-lg bg-white/10 placeholder-gray-400 text-white"
          rows="4"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-600 text-white mx-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
