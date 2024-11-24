import logo from "../assets/Aniborgz-logo.png";
import telegram from "../assets/telegram.svg";
import solana from "../assets/solana-sol-logo.svg";
// import twitter from "../assets/twitter.svg";
import binance from "../assets/binance-logo.svg";
import cmc from "../assets/coinmarketcap-1.svg";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto px-6 py-6">
      <nav className="flex lg:flex-row flex-col justify-between items-center max-w-screen-xl mx-auto">
        <div>
          <img src={logo} alt="logo" width={70} height={70} />
        </div>
        <ul className="flex items-center gap-8 text-white text-base lg:text-[1.5rem]">
          <li className="hover:cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#nft">NFTs</a>
          </li>
          {/* <li className="cursor-pointer">
            <a href="#presale">Presale</a>
          </li> */}
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
      </nav>
      <div className="flex justify-center gap-4 items-center mt-6">
        <img src={binance} alt="" width={40} height={40} />
        <motion.a
          initial="hidden"
          whileInView="show"
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          viewport={{ once: true }}
          href="https://t.me/aniborgsOnSol"
        >
          <img src={telegram} alt="" width={40} height={40} />
        </motion.a>
        <a href="">
          <img src={solana} alt="" width={40} height={40} />
        </a>

        <motion.a
          initial="hidden"
          whileInView="show"
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          viewport={{ once: true }}
          href="https://x.com/aniborgsxyz"
        >
          <FaXTwitter className="text-4xl" />
        </motion.a>
        <img src={cmc} alt="" width={40} height={40} />
      </div>
    </footer>
  );
};

export default Footer;
