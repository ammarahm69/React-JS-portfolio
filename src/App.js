import { HashRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import IconHome from "./components/home.webp";

function App() {
  return (
    <Router>
      <div className="bg-[rgb(28,26,26)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

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

        <section id="contact" className="snap-end">
          <Contact />
        </section>


        {/* Smooth scroll to the hero section when clicking the footer icon */}
        <HashLink smooth to="#hero">
          <footer className="sticky bottom-16 w-full cursor-pointer animate-bounce">
            <div className="flex items-center justify-center">
              <img
                src={IconHome}
                alt=""
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          </footer>
        </HashLink>
      </div>
    </Router>
  );
}

export default App;
