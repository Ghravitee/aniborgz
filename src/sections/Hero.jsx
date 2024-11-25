import { motion } from "framer-motion";
// import heroBg from "../assets/first-bg.webp";
import ani1 from "../assets/ani-1.webp";
// import nahVideo from "../assets/nah-video.mp4";

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

  // const buttonAnimation = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 1, ease: "easeOut", delay: 0.6 },
  //   },
  // };

  const imageAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.9 },
    },
  };

  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full bg-black bg-opacity-50 text-white relative max-w-[1300px] mx-auto px-5">
        <div className="flex flex-col gap-5 items-start md:items-start text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white hover:cursor-pointer unlock"
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
          >
            $Borgs: The Future of Cross-Chain Gaming
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
        </div>

        <motion.div
          className="mt-10 md:mt-0 md:absolute bottom-0 md:right-0 flex justify-center md:block w-[22rem] md:w-96 lg:w-[700px] mx-auto"
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
        >
          <img src={ani1} alt="Animated Element" className="w-full h-auto" />
        </motion.div>
      </div>
      {/* <div className="grid grid-cols-1 gap-[40px] lg:gap-12 py-20 ">
        <video
          src={nahVideo}
          controls
          autoPlay
          loop
          muted
          className="animate-fadeIn delay-[200ms]"
           style={styles.video}
        />
      </div> */}
    </div>
  );
};

// const styles = {
//   video: {
//     width: "100%", // Ensures video fits the grid cell
//     height: "auto",
//   },
// };

export default Hero;
