"use client";

import { useRef, useState, useEffect } from "react";

const features = [
  { title: "Easy Organization", desc: "Create folders and tag your images effortlessly." },
  { title: "Beautiful UI", desc: "A clean, futuristic design that’s a joy to use." },
  { title: "Fast & Secure", desc: "All your memories are stored safely and loaded instantly." },
];

export default function Features() {
  const ref = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            setVisible((v) => ({ ...v, [target.id]: true }));
            obs.unobserve(target);
          }
        }),
      { threshold: 0.2 }
    );
    ref.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" className="py-20">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
        Features
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            id={i}
            ref={(el) => (ref.current[i] = el)}
            className={`p-6 bg-white/10 rounded-xl shadow-lg transition-all duration-700 ${
              visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
