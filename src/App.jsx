import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100">
      <Navbar dark={dark} setDark={setDark} />
      <Header />
      <main>
        <Summary />
        <Skills />
        <Education />
        <Internships />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
