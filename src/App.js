import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import IconHome from "./components/home.webp";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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

        <a href="#hero">
          <footer className="sticky bottom-0 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                src={IconHome}
                alt=""
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          </footer>
        </a>
      </div>
    </Router>
  );
}

export default App;
