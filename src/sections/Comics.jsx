import { motion, useScroll, useTransform } from "framer-motion";
import { cards } from "../utils/images";
import Card from "../components/Card";
import { useRef } from "react";

const Comics = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section id="nft" ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="mb-12 relative leading-7 uppercase anton-regular font-black">
        <h2 className=" text-center text-[4rem] sm:text-[4rem] md:text-[5rem] lg:text-[4rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
          $BORGZ COLLECTION
        </h2>
        <h2 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] dark:text-white text-black">
          $BORGZ COLLECTION
        </h2>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
