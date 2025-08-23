import React from "react";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="h2">Education</h2>
      <div className="card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">KIET Group Of Institutions, APJ Abdul Kalam Technical University</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Bachelor of Technology in Information Technology (CGPA: 8.15)</p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">Nov 2021 - May 2025 • Ghaziabad, Uttar Pradesh</div>

          <div>
            <p className="font-semibold">LORD MAHAVIRA ACADEMY, CBSE</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">SECONDARY HIGH SCHOOL (PERCENTAGE %: 89.6)</p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">March 2020 - June 2021 • Ghaziabad, Uttar Pradesh</div>

          <div>
            <p className="font-semibold">LORD MAHAVIRA ACADEMY, CBSE</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">HIGH SCHOOL (PERCENTAGE %: 85.6)</p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">March 2018 - May 2019 • Ghaziabad, Uttar Pradesh</div>
        </div>
      </div>
    </section>
  );
}
