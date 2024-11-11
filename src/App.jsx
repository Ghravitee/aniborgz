import About from "./sections/About";
import Comics from "./sections/Comics";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
// import Presale from "./sections/Presale";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="relative w-full overflow-x-hidden lg:overflow-visible">
      <Navbar />
      <Hero />
      <About />
      <Comics />
      {/* <Presale /> */}
      <Roadmap />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
