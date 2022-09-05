import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./Testimonials";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <div style={{ height: "200px" }}></div>
    </>
  );
}

export default App;
