import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogData";

export default function BlogList() {
  return (
    <section id="blog" className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">Blog</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <article
            key={post.slug}
            className="border dark:border-slate-700 p-4 rounded"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-40 object-cover rounded"
              loading="lazy"
            />
            <div className="mt-3">
              <div className="text-xs text-slate-500">{post.date}</div>
              <h3 className="font-medium">{post.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-3 inline-block text-brand-500 text-sm"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
