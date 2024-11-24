import { FaXTwitter } from "react-icons/fa6";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const Campaign = () => {
  return (
    <section className="border-t border-t-[#001a29] lg:px-0 px-6 my-2">
      <div className="max-w-[1300px] mx-auto flex flex-col gap-4 lg:grid lg:grid-cols-[.6fr_.4fr] py-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="lg:text-[2vw] text-[1.8rem] font-bold">
            Want to promote your business to 336M users on X ‍Trend your
            #Hashtags through Xmmunity.com
          </h2>
          <a
            href=""
            className="py-2 lg:py-3 px-6 lg:flex items-center justify-start bg-orange-400 text-white rounded-2xl w-fit hidden "
          >
            Campaign request form
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          viewport={{ once: true }}
          className="flex items-end justify-center gap-2"
        >
          <FaXTwitter className="text-7xl lg:text-9xl" />
          <h2 className="text-[2rem] font-bold">#1 TRENDING</h2>
        </motion.div>
        <a
          href=""
          className="py-2 lg:py-3 px-6 lg:hidden items-center justify-start bg-orange-400 text-white rounded-2xl w-fit flex "
        >
          Campaign request form
        </a>
      </div>
    </section>
  );
};

export default Campaign;
