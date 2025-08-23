import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = "ad79aac7-6c3b-4ea1-897f-22cb8e996d0c";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    data.append("access_key", API_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Message sent successfully!", { position: "top-right", autoClose: 3000 });
        e.target.reset();
      } else {
        toast.error("Failed to send message. Try again.", { position: "top-right", autoClose: 3000 });
      }
    } catch (err) {
      toast.error("Something went wrong!", { position: "top-right", autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="h2">Contact</h2>
      <div className="card p-6">
        <form onSubmit={handleSubmit} className="grid gap-3">
          <input className="border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 bg-white dark:bg-slate-900" name="name" placeholder="Your Name" required />
          <input className="border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 bg-white dark:bg-slate-900" type="email" name="email" placeholder="Your Email" required />
          <textarea className="border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 bg-white dark:bg-slate-900" name="message" rows="5" placeholder="Your Message" required />
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
}
