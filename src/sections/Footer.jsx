import logo from "../assets/ani-logo.jpg";
import telegram from "../assets/telegram.svg";
import solana from "../assets/solana-sol-logo.svg";
// import twitter from "../assets/twitter.svg";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto px-6 py-6">
      <nav className="flex flex-col justify-between items-center max-w-screen-xl mx-auto">
        <div>
          <img src={logo} alt="logo" width={70} height={70} />
        </div>
        <ul className="flex flex-col items-center gap-8 text-white text-base lg:text-[1.5rem]">
          <li className="hover:cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#nft">NFTs</a>
          </li>
          <li className="cursor-pointer">
            <a href="#presale">Presale</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#roadmap">Roadmap</a>
          </li>
          <li className="hover:cursor-pointer">
            <a href="#tokenomics">Tokenomics</a>
          </li>
          {/* <li className="hover:cursor-pointer">
            <a href="">Community</a>
          </li> */}
          {/* <li className="hover:cursor-pointer">
            <a href="">FAQs</a>
          </li> */}
        </ul>
        <div className="flex justify-center gap-4 items-center mt-6">
          <motion.img
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            src={telegram}
            alt=""
            width={50}
            height={50}
          />
          <img src={solana} alt="" width={50} height={50} />
          <motion.a
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            href="https://x.com/Aniborgz"
          >
            <FaXTwitter className="text-6xl" />
          </motion.a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
