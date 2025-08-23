import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      {/* Profile photo */}
      <img
        src="/profile.jpg"   // put profile.jpg inside public/
        alt="Aastha Goyal"
        className="rounded-full w-40 h-40 shadow-lg mb-6"
      />

      {/* Intro */}
      <h1 className="text-4xl font-bold">Hi, I'm Aastha Goyal</h1>
      <p className="mt-3 text-lg text-gray-300">
        Web Developer | Problem Solver | Tech Enthusiast
      </p>

      {/* Links */}
      <div className="flex gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/aastha-goyal-94a088281"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/aastha4502"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800"
        >
          GitHub
        </a>
        {/* Resume Download */}
        <a
          href="/resume.pdf"   // ✅ correct
          download
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
