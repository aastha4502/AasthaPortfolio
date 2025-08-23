import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="h2">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold mb-3">Technical</h3>
          <div className="flex flex-wrap gap-2">
            {["C","Java","HTML","CSS","JavaScript","React","Bootstrap","Node.js","SQL","MongoDB","Git","Blockchain"].map((t)=>(
              <span className="badge" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Leadership","Teamwork","Time Management","Project Building","Problem Solving","Public Speaking","Multitasking"].map((t)=>(
              <span className="badge" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
