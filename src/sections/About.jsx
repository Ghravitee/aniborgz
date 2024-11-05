import ani2 from "../assets/ani-2.png";
import telegram from "../assets/telegram.svg";
import solana from "../assets/solana-sol-logo.svg";
import twitter from "../assets/twitter.svg";
import { motion } from "framer-motion";

import { fadeIn, zoomIn } from "../utils/motion";

const About = () => {
  return (
    <div id="about" className="max-w-[1300px] mx-auto rounded-2xl my-20">
      <div className="mb-12 relative leading-7 uppercase anton-regular font-black">
        <h2 className=" text-center text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
          ABOUT $BORGZ
        </h2>
        <h3 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] dark:text-white text-black">
          ABOUT $BORGZ
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 px-10">
        <div>
          <motion.img
            variants={zoomIn(0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={ani2}
            alt=""
          />
        </div>
        <div>
          <p className="text-white text-2xl lg:text-3xl text-center">
            Borgz is transforming gaming by creating a blockchain ecosystem
            where players can own, trade, and control their in-game assets
            across multiple blockchains. Borgz will begin as a Solana-based
            token, giving early supporters exclusive access to the Aniborgz NFT
            collection, staking rewards, and governance privileges. This initial
            phase leverages Solana’s speed, low fees, and active community,
            laying the groundwork for a strong Borgz user base.
          </p>
          <div className="flex justify-center gap-4 items-center mt-6">
            <motion.img
              initial="hidden"
              whileInView="show"
              variants={fadeIn("right", "tween", 0.5, 0.5)}
              viewport={{ once: true }}
              src={telegram}
              alt=""
              width={70}
              height={70}
            />
            <img src={solana} alt="" width={70} height={70} />
            <motion.img
              initial="hidden"
              whileInView="show"
              variants={fadeIn("left", "tween", 0.5, 0.5)}
              viewport={{ once: true }}
              src={twitter}
              alt=""
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
