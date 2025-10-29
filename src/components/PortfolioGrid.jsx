import React from "react";
import { portfolio } from "../data/portfolioData";

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">Work Showcase</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-slate-800 rounded-lg shadow p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
              loading="lazy"
            />
            <h3 className="mt-3 font-medium">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.type}</p>
            <div className="mt-3 flex gap-3">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-500 text-sm underline"
                >
                  View
                </a>
              )}
              {item.pdf && (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-500 text-sm underline"
                >
                  Download PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
