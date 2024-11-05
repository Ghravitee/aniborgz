// ComicBackground.js

import { motion, useScroll, useTransform } from "framer-motion";

const ComicBackground = () => {
  const { scrollYProgress } = useScroll();

  // Scale and opacity effect based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Comic Text */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-7xl font-bold text-yellow-500"
        style={{ scale, opacity }}
        animate={{ rotate: [0, 20, -20, 0], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Pow!
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-3/4 text-7xl font-bold text-red-500"
        style={{ scale, opacity }}
        animate={{ rotate: [0, -20, 20, 0], x: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Bam!
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 text-7xl font-bold text-blue-500"
        style={{ scale, opacity }}
        animate={{ rotate: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        Zap!
      </motion.div>
    </div>
  );
};

export default ComicBackground;
