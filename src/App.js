import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="education" className="snap-center">
          <Education />
        </section>

        <section id="skills" className="snap-start">
          <Skill />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </Router>
  );
}

export default App;
