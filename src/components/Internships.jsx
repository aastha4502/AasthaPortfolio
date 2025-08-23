import React from "react";

export default function Internships() {
  return (
    <section id="internships" className="section">
      <h2 className="h2">Internships</h2>
      <div className="grid gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Skyhighes — Web Development Intern</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">Jan 2024 – Mar 2024</span>
          </div>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-sm sm:text-base">
            <li>Engineered a fully responsive and dynamic Temperature Conversion web application using HTML, CSS, and JavaScript, featuring an intuitive, visually captivating interface.</li>
            <li>Enhanced expertise in front-end development, analytical problem-solving, and efficient debugging to deliver a seamless and user-friendly experience.</li>
            <li>Intuitive, mobile-optimized, and engaging UI/UX design with advanced analytical thinking and innovative troubleshooting abilities.</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">4 Prosper Technologies Pvt Ltd — Web Development Intern</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">Jul 2023 – Oct 2023</span>
          </div>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-sm sm:text-base">
            <li>Engineered and deployed a fully responsive restaurant website incorporating an interactive digital menu, reservations, order management, and robust user authentication.</li>
            <li>Partnered with design and content teams to craft an intuitive, user-focused interface and integrated secure payment gateways for reliable end-to-end transactions.</li>
            <li><span className="font-medium">Keywords:</span> HTML, CSS, JavaScript, React</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
