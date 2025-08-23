import React from "react";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2 className="h2">Achievements</h2>
      <div className="grid gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">Reckon 5.0</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Participated in Institute level Hackathon after selecting in top 100 teams</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Innotech-2023</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">College level Tech Competition — 1st position in Poster Making</p>
        </div>
      </div>
    </section>
  );
}
