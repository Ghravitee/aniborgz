// import About from "./sections/About";
import Comics from "./sections/Comics";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
// import Presale from "./sections/Presale";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";
import Footer from "./sections/Footer";
import Trend from "./sections/Trend";
import Campaign from "./sections/Campaign";

const App = () => {
  return (
    <div className="relative w-full overflow-x-hidden ">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Comics />
      <Trend />
      <Campaign />
      {/* <Presale /> */}
      <Tokenomics />
      <Roadmap />

      <Footer />
    </div>
  );
};

export default App;
