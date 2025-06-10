"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="text-center">
        <div className="mb-6 sm:mb-8">
          <Image
            src="/portrait.jpg"
            alt="Profile Picture"
            width={240}
            height={240}
            className="rounded-full mx-auto border-4 border-gray-700 shadow-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
          Andrew Coleburn
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
          Full Stack Developer
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
          I am a fullstack developer with a frontend focus. I work most often
          with React and Node, and have 5+ years of expereince building
          performant, scalable apps for seed stage startups, Fortune 500 giants,
          and everyone in between. I am actively looking for my next opportunity!
        </p>
      </div>
    </section>
  );
}
