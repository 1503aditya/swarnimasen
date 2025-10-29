import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t py-6 text-center text-sm text-slate-500 dark:border-slate-800">
      <p>© {new Date().getFullYear()} Swarnima Sen. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://www.linkedin.com/in/swarnima-sen-8a3275210/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a href="mailto:swarnimasen2002@gmail.com" className="hover:underline">
          Email
        </a>
      </div>
    </footer>
  );
}
