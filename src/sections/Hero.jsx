import { motion } from "framer-motion";
import heroBg from "../assets/first-bg.webp";
import ani1 from "../assets/ani-1.webp";

const Hero = () => {
  // Define animations for different elements
  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtitleAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.6 },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.9 },
    },
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-top pt-28 relative"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full bg-black bg-opacity-50 text-white relative max-w-[1300px] mx-auto px-5">
        <div className="flex flex-col gap-5 items-start md:items-start text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white hover:cursor-pointer"
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
          >
            $Borgz: The Future of Cross-Chain Gaming
          </motion.h1>

          <motion.h1
            className="text-lg md:text-2xl lg:text-3xl font-semibold text-white"
            variants={subtitleAnimation}
            initial="hidden"
            animate="visible"
          >
            Launching on Solana, evolving to Cosmos, and empowering gamers with
            true asset ownership across chains.
          </motion.h1>

          <motion.a
            href="#_"
            className="relative inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group mx-auto md:m-0"
            variants={buttonAnimation}
            initial="hidden"
            animate="visible"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative text-lg md:text-2xl">Learn More</span>
          </motion.a>
        </div>

        <motion.div
          className="mt-10 md:mt-0 md:absolute bottom-0 md:right-0 flex justify-center md:block w-[17rem] md:w-96 lg:w-[700px] mx-auto"
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
        >
          <img src={ani1} alt="Animated Element" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
