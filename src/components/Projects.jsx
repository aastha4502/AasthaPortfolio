import React from "react";

const projectList = [
  {
    title: "Portfolio with Feedback",
    description: "Responsive portfolio with integrated feedback form for user engagement.",
    tech: ["HTML","CSS","JavaScript","React","Web3Forms"],
    link: "#"
  },
  {
    title: "MenstaMate",
    description: "Female health platform with PCOS prediction, period tracking, and community engagement.",
    tech: ["HTML","CSS","JavaScript","NodeJS","MongoDB","Python"],
    link: "https://aastha4502.github.io/menstruation-tracker/"
  },
  {
    title: "RentIt",
    description: "Peer‑to‑peer rentals with auth, product listings, likes/favorites, and real‑time UI updates.",
    tech: ["HTML","CSS","JS","React","NodeJS","SQL","MERN"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="h2">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((p, i) => (
          <article key={i} className="card p-6 hover:-translate-y-1 hover:shadow-xl transition">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
          </article>
        ))}
      </div>
    </section>
  );
}
