import React from "react";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Nav from "../components/portfolio/Nav";
import Hero from "../components/portfolio/Hero";
import Marquee from "../components/portfolio/Marquee";
import Projects from "../components/portfolio/Projects";
import BuildSeries from "../components/portfolio/BuildSeries";
import Skills from "../components/portfolio/Skills";
import About from "../components/portfolio/About";
import Education from "../components/portfolio/Education";
import Connect from "../components/portfolio/Connect";
import Footer from "../components/portfolio/Footer";
export default function Portfolio() {
  useSmoothScroll();
  return (
    <main data-testid="portfolio-root">
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <BuildSeries />
      <Skills />
      <About />
      <Education />
      <Connect />
      <Footer />
    </main>
  );
}