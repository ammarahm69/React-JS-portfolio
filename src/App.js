import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Education */}
        <section id="education" className="snap-center">
          <Education />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skill />
        </section>
        {/*  Projects */}

        <section id="projects" className="snap-start">
          <Projects />
        </section>
      </div>
    </Router>
  );
}

export default App;
