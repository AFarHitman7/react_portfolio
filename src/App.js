import React from "react";
import About from "./components/about";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
