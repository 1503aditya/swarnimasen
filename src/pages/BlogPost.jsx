import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);

  if (!post)
    return <p className="text-center mt-10 text-slate-500">Blog not found.</p>;

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto">
      <Link to="/" className="text-sm text-brand-500 hover:underline">
        &larr; Back
      </Link>
      <h1 className="text-3xl mt-4 font-semibold">{post.title}</h1>
      <p className="text-slate-500 text-sm">{post.date}</p>
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full my-4 rounded-lg shadow-md"
      />
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {post.excerpt}
      </p>
      <p className="mt-4">Full blog content will go here...</p>
    </article>
  );
}
