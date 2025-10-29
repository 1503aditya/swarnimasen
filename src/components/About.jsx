import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
        I'm <strong>Swarnima Sen</strong>, a seasoned SEO Content Writer with 4+
        years of experience in the field of Content Writing. Having delivered
        content of diverse niches in bulk, I can assert that my content is sure
        to compel the readers to read it till the very end. I have worked for
        several US and India-based clients and have driven great website traffic
        to that particular website and helped it grow its brand.
      </p>

      <div className="mt-6">
        <h3 className="font-medium text-lg mb-2">Skills</h3>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-slate-600 dark:text-slate-300">
          <li>SEO Writing</li>
          <li>Content Strategy</li>
          <li>Copywriting</li>
          <li>Whitepapers</li>
          <li>Landing Page Content</li>
          <li>Research & Editing</li>
          <li>Social Media Copy</li>
          <li>Video Scripts</li>
          <li>Brand Storytelling</li>
        </ul>
      </div>
    </section>
  );
}
