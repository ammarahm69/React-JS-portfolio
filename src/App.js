import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0" >
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center m-12">
        <Hero />
      </section>
      {/* About */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
}

export default App;
