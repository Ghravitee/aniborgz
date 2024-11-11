// import { motion, useScroll, useTransform } from "framer-motion";
// import Card from "../components/Card";
// import ani5 from "../assets/Ani-5.webp";
// import ani6 from "../assets/Ani-6.webp";
// import ani7 from "../assets/Ani-7.webp";
// import ani9 from "../assets/Ani-9.webp";
// import ani4 from "../assets/Ani-4.webp";
// import ani13 from "../assets/Ani-13.webp";
// import ani14 from "../assets/Ani-14.webp";
// const cards = [
//   {
//     url: ani5,
//     title: "Title 2",
//     id: 1,
//   },
//   {
//     url: ani6,
//     title: "Title 3",
//     id: 2,
//   },
//   {
//     url: ani7,
//     title: "Title 4",
//     id: 3,
//   },
//   {
//     url: ani9,
//     title: "Title 5",
//     id: 4,
//   },
//   {
//     url: ani4,
//     title: "Title 1",
//     id: 5,
//   },
//   {
//     url: ani13,
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: ani14,
//     title: "Title 7",
//     id: 7,
//   },
// ];
// import { useRef } from "react";

// const Comics = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

//   return (
//     <section id="nft" ref={targetRef} className="relative h-[300vh] bg-black">
//       <div className="mb-12 relative leading-7 uppercase unlock font-black">
//         <h2 className=" text-center text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[4rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
//           $BORGZ COLLECTION
//         </h2>
//         <h2 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] dark:text-white text-black">
//           $BORGZ COLLECTION
//         </h2>
//       </div>
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden-">
//         <motion.div style={{ x }} className="flex gap-4">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Comics;

import { useRef } from "react";
import { slideInFromLeft, slideInFromRight, fadeIn } from "../utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../components/Card";
import ani5 from "../assets/Ani-5.webp";
import ani6 from "../assets/Ani-6.webp";
import ani7 from "../assets/Ani-7.webp";
import ani9 from "../assets/Ani-9.webp";
import ani4 from "../assets/Ani-4.webp";
import ani13 from "../assets/Ani-13.webp";
import ani14 from "../assets/Ani-14.webp";

const cards = [
  {
    url: ani5,
    title: "Title 2",
    id: 1,
  },
  {
    url: ani6,
    title: "Title 3",
    id: 2,
  },
  {
    url: ani7,
    title: "Title 4",
    id: 3,
  },
  {
    url: ani9,
    title: "Title 5",
    id: 4,
  },
  {
    url: ani4,
    title: "Title 1",
    id: 5,
  },
  {
    url: ani13,
    title: "Title 6",
    id: 6,
  },
  {
    url: ani14,
    title: "Title 7",
    id: 7,
  },
];

const images = [ani5, ani6, ani7, ani9, ani4, ani13, ani14];

const Comics = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
  return (
    <section
      id="nft"
      ref={targetRef}
      className="relative lg:h-[300vh] bg-black px-4"
    >
      <div className="mb-12 relative leading-7 uppercase unlock font-black">
        <h2 className=" text-center text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[4rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
          $BORGS COLLECTION
        </h2>
        <h2 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] dark:text-white text-black">
          $BORGS COLLECTION
        </h2>
      </div>

      {/* images on the mobile and tablet viewport */}
      <div className="lg:hidden grid gap-4 transition-transform duration-700 ease-in-out grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="min-w-full sm:min-w-0"
            initial="hidden"
            whileInView="show"
            variants={
              index % 2 === 0
                ? fadeIn("right", "tween", 0.5, 0.5)
                : fadeIn("left", "tween", 0.5, 0.5)
            }
            // variants={fadeIn("right", "tween", 0.5, 0.5)}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>

      <div className="hidden sticky top-0 lg:flex h-screen items-center overflow-hidden-">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Comics;
