// import ani9 from "../assets/Ani-9.webp";
// import { TfiAngleLeft } from "react-icons/tfi";
// import { motion } from "framer-motion";
// import { slideInFromTop, slideInFromTop2, zoomIn } from "../utils/motion";

// const Tokenomics = () => {
//   return (
//     <div id="tokenomics" className="max-w-[1300px] mx-auto my-20 ">
//       <div className="mb-24 relative leading-7 uppercase unlock font-black">
//         <h2 className=" text-center text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
//           TOKENOMICS
//         </h2>
//         <h2 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] dark:text-white text-black">
//           TOKENOMICS
//         </h2>
//       </div>

//       <div className="hidden relative h-screen md:flex justify-center items-center">
//         <div className="absolute mx-auto  w-[3px] h-16 bg-gray-400" />
//         <div className="absolute mx-auto w-[3px] h-16 bg-gray-400" />
//         <div className="absolute mx-auto rounded-full">
//           <div className="lg:w-[25rem] lg:h-[25rem] w-[15rem h-[15rem]">
//             <img src={ani9} alt="" className="rounded-full w-full h-full" />
//           </div>
//           {/* <TfiAngleLeft className="absolute text-9xl -left-12 top-0 rotate-360 text-red-500" /> */}
//           <TfiAngleLeft className="hidden lg:block absolute size-[14rem] -right-[38%] rotate-90 -top-[25%] text-white" />

//           <TfiAngleLeft className="hidden lg:block absolute size-[14rem] -left-[38%] rotate-90 -top-[25%] text-white" />
//           <motion.div
//             variants={zoomIn(0.4, 1)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="size-48 flex justify-center items-center px-4 py-4 absolute lg:-right-[60%] lg:top-[12%] bg-red-950 rounded-full"
//           >
//             <p className="text-2xl font-bold text-center unlock">
//               $BORGS TOKEN
//             </p>
//           </motion.div>
//           <motion.div
//             variants={zoomIn(0.4, 1)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="size-56 flex justify-center items-center rounded-full absolute lg:-left-[65%] lg:top-[12%] bg-red-950"
//           >
//             <p className="text-2xl font-bold text-center unlock">
//               TOTAL SUPPLY: 1,000,000,000
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* MObile */}
//       {/* MObile */}
//       {/* MObile */}
//       <div className="md:hidden h-screen flex flex-col justify-center items-center">
//         <motion.div
//           variants={slideInFromTop}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="size-48 flex justify-center items-center px-4 py-4 bg-red-950 rounded-full"
//         >
//           <p className="text-2xl font-bold text-center unlock">$BORGS TOKEN</p>
//         </motion.div>
//         <div className="mx-auto  w-[3px] h-16 bg-gray-400" />

//         <div className="lg:w-[25rem] lgLh-[25rem] w-[15rem h-[15rem]">
//           <img src={ani9} alt="" className="rounded-full w-full h-full" />
//         </div>

//         <div className="mx-auto  w-[3px] h-16 bg-gray-400" />

//         <motion.div
//           variants={slideInFromTop2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="size-56 flex justify-center items-center rounded-full bg-red-950"
//         >
//           <p className="text-2xl font-bold text-center unlock">
//             TOTAL SUPPLY: 1,000,000,000
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Tokenomics;
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tokenomics = () => {
  return (
    <section className=" my-16 border-y border-y-[#001a29] lg:px-0 px-6">
      <div className="max-w-[1300px] mx-auto py-20">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("right", "tween", 0.5, 0.5)}
              viewport={{ once: true }}
              className="flex items-center justify-start px-4 py-2 font-bold rounded-3xl border border-[#222] text-[1.5rem] text-gray-500 w-fit"
            >
              Tokemonics
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("right", "tween", 0.8, 0.5)}
              viewport={{ once: true }}
              className="flex items-center justify-start px-4 py-2 font-bold rounded-3xl border border-[#222] text-[2rem] w-fit"
            >
              Zero Tax, Simple Contract
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("right", "tween", 1.1, 0.5)}
              viewport={{ once: true }}
              className="px-4 py-2 font-bold rounded-3xl border border-[#222] text-[2rem] lg:text-[4rem] w-fit"
            >
              $BORGS TOKEN
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("right", "tween", 1.4, 0.5)}
              viewport={{ once: true }}
              className="flex items-center justify-start px-4 py-2 font-bold rounded-3xl border border-[#222] text-[1.7rem] lg:text-[3rem] w-fit"
            >
              Token Supply: 1,000,000,000
            </motion.div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
