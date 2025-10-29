import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="py-4 border-b dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/images/profile.jpg"
            alt="Swarnima Sen"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-serif font-semibold">Swarnima Sen</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Content Writer • Premium Script Writer • Copywriter
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <a href="#portfolio" className="hover:underline">
            Work
          </a>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
          <a href="#contact" className="hover:underline">
            Hire Me
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
