import solana from "../assets/Solana_logo.png";
import tether from "../assets/tether-usdt-seeklogo.svg";
import eth from "../assets/ETH.png";
import logo from "../assets/Aniborgz-logo.png";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";
import { fadeIn } from "../utils/motion";

const Trend = () => {
  return (
    <section className="border-t border-t-[#001a29] lg:px-0 px-6 my-2">
      <div className="max-w-[1300px] mx-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <div className="flex justify-center items-center">
              <h2 className="hidden md:block text-red-800 [text-shadow:_20px_20px_500px_#991b1b] text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[300px] font-black">
                #1
              </h2>
              <img
                src={logo}
                alt=""
                width={120}
                height={120}
                className="border border-white rounded-full md:hidden"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("right", "tween", 0.5, 0.5)}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <h3 className="text-orange-400 text-[2.8rem] font-black">
                Trend <span className="text-white text-[3rem]">$BORGS,</span>{" "}
                Earn
              </h3>
            </motion.div>
            <motion.div
              variants={zoomIn(0.4, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:flex gap-4 justify-center items-center hidden
            "
            >
              <img
                src={solana}
                alt=""
                width={120}
                height={120}
                className="box-eth rounded-full"
              />
              <img
                src={tether}
                alt=""
                width={120}
                height={120}
                className="box-tether rounded-full"
              />
              <img
                src={eth}
                alt=""
                width={120}
                height={120}
                className="box-eth rounded-full"
              />
              <img
                src={logo}
                alt=""
                width={120}
                height={120}
                className="rounded-full box-logo"
              />
            </motion.div>
          </div>
          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 0.5)}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:mt-[12rem]"
          >
            <h2 className="text-[1.8rem] lg:text-[2.1rem] font-bold">
              Earn ETH, SOL, USDT or $BORGS by participating in our campaigns.
              Simply create content on X using our #Hashtags.
            </h2>
            <div className="flex justify-center gap-4 lg:flex-col">
              <a
                href=""
                className="py-3 px-6 flex items-center justify-start bg-orange-400 text-white rounded-2xl w-fit"
              >
                Xmmunity.com
              </a>
              <a
                href=""
                className="py-3 px-6 flex items-center justify-start bg-gray-800 text-white rounded-2xl w-fit"
              >
                See Gitbook
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trend;
