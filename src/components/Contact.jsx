import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-slate-700 dark:text-slate-300 max-w-2xl">
        Interested in working together? Let’s talk about your next project.
      </p>

      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="mt-6 space-y-3"
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded dark:bg-slate-800"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded dark:bg-slate-800"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full p-2 border rounded dark:bg-slate-800"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          Send
        </button>
      </form>
    </section>
  );
}
