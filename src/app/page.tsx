import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <div className="noise-overlay" />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
