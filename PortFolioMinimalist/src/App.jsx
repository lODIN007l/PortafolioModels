import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <div style={{ height: "2000px" }}></div>
    </>
  );
}

export default App;
