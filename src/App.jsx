// import About from "./sections/About";
import { useEffect, useState } from "react";
import Comics from "./sections/Comics";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
// import Presale from "./sections/Presale";
import Roadmap from "./sections/Roadmap";
import Tokenomics from "./sections/Tokenomics";
import Footer from "./sections/Footer";
import Trend from "./sections/Trend";
// import Campaign from "./sections/Campaign";
import logo from "../src/assets/Aniborgz-logo.png";

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <img src={logo} alt="Loading..." className="" width={300} height={300} />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (for example, 2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);
  return (
    <div className="relative w-full overflow-x-hidden ">
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Navbar />
          <Hero />
          {/* <About /> */}
          <Comics />
          <Trend />
          {/* <Campaign /> */}
          {/* <Presale /> */}
          <Tokenomics />
          <Roadmap />
          <Footer />{" "}
        </>
      )}
    </div>
  );
};

export default App;
