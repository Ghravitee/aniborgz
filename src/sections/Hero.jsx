// import { motion } from "framer-motion";
// // import heroBg from "../assets/first-bg.webp";
// import ani1 from "../assets/ani-1.webp";
// // import nahVideo from "../assets/nah-video.mp4";

// const Hero = () => {
//   // Define animations for different elements
//   const titleAnimation = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const subtitleAnimation = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, ease: "easeOut", delay: 0.3 },
//     },
//   };

//   // const buttonAnimation = {
//   //   hidden: { opacity: 0, scale: 0.8 },
//   //   visible: {
//   //     opacity: 1,
//   //     scale: 1,
//   //     transition: { duration: 1, ease: "easeOut", delay: 0.6 },
//   //   },
//   // };

//   const imageAnimation = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1, ease: "easeOut", delay: 0.9 },
//     },
//   };

//   return (
//     <div className="h-screen w-full">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full bg-black bg-opacity-50 text-white relative max-w-[1300px] mx-auto px-5">
//         <div className="flex flex-col gap-5 items-start md:items-start text-center md:text-left">
//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-7xl font-bold text-white hover:cursor-pointer unlock"
//             variants={titleAnimation}
//             initial="hidden"
//             animate="visible"
//           >
//             $Borgs: The Future of Cross-Chain Gaming
//           </motion.h1>

//           <motion.h1
//             className="text-lg md:text-2xl lg:text-3xl font-semibold text-white"
//             variants={subtitleAnimation}
//             initial="hidden"
//             animate="visible"
//           >
//             Launching on Solana, evolving to Cosmos, and empowering gamers with
//             true asset ownership across chains.
//           </motion.h1>
//         </div>

//         <motion.div
//           className="mt-10 md:mt-0 md:absolute bottom-0 md:right-0 flex justify-center md:block w-[22rem] md:w-96 lg:w-[700px] mx-auto"
//           variants={imageAnimation}
//           initial="hidden"
//           animate="visible"
//         >
//           <img src={ani1} alt="Animated Element" className="w-full h-auto" />
//         </motion.div>
//       </div>
//       {/* <div className="grid grid-cols-1 gap-[40px] lg:gap-12 py-20 ">
//         <video
//           src={nahVideo}
//           controls
//           autoPlay
//           loop
//           muted
//           className="animate-fadeIn delay-[200ms]"
//            style={styles.video}
//         />
//       </div> */}
//     </div>
//   );
// };

// // const styles = {
// //   video: {
// //     width: "100%", // Ensures video fits the grid cell
// //     height: "auto",
// //   },
// // };

// export default Hero;

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(4);

  const totalVidoes = 4;
  const nextVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVidoes) + 1;

  const handleMiniVidClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      borderRadius: "0% 0% 0% 0%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/clip-${index}-compressed.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              onClick={handleMiniVidClick}
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVidoes - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="unlock hero-heading absolute bottom-16 right-10 z-40 text-blue-75">
          W<b>o</b>rlds
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="unlock hero-heading text-blue-100">
              b<b>o</b>undl<b>e</b>ss
            </h1>
            <p className="mb-5 max-w-[20rem] font-robert-regular text-blue-100 text-[1.1rem] lg:text-[1.5rem]">
              Unlock Aniborg&apos;s Universe <br /> Revolutionize Play. Own the
              Future.
            </p>
          </div>
        </div>
      </div>
      <h1 className=" hero-heading absolute unlock bottom-16 right-10 text-[#780606]">
        W<b>o</b>rlds
      </h1>
      {/* <h1 className="special-font hero-heading text-blue-100">
        b<b>o</b>undl<b>e</b>ss
      </h1> */}
    </div>
  );
};

export default Hero;
