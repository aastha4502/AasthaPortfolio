import React from "react";
import profile from "../assets/profile.jpg";

export default function Header() {
  return (
    <header id="home" className="bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="section text-center">
        <img src={profile} alt="Aastha Goyal" className="mx-auto w-40 h-40 rounded-full ring-4 ring-blue-500 object-cover mb-4" />
        <h1 className="text-3xl sm:text-5xl font-bold">Aastha Goyal</h1>
        <p className="mt-3 text-slate-300">Dedicated Web Developer • Problem Solver • Tech Enthusiast</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="https://www.linkedin.com/in/aastha-goyal-94a088281" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
          <a href="https://github.com/aastha4502" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
          <a href="/resume.pdf" download className="btn-outline">Download Resume</a>
        </div>
      </div>
    </header>
  );
}
