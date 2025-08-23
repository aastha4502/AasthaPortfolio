import React from "react";
const Sun = () => <span>☀️</span>; const Moon = () => <span>🌙</span>;

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">Aastha Goyal</a>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#summary" className="hover:text-blue-300">Summary</a></li>
          <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
          <li><a href="#education" className="hover:text-blue-300">Education</a></li>
          <li><a href="#internships" className="hover:text-blue-300">Internships</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#certifications" className="hover:text-blue-300">Certs</a></li>
          <li><a href="#achievements" className="hover:text-blue-300">Achievements</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="btn-outline w-10 h-10 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </div>
    </nav>
  );
}
