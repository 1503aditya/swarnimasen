import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import PortfolioGrid from "../components/PortfolioGrid";
import BlogList from "../components/BlogList";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PortfolioGrid />
      <BlogList />
      <Contact />
    </>
  );
}
