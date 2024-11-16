import logo from "../assets/ani-logo.jpg";
import { useState } from "react";
import AnimatedHamburgerButton from "../components/AnimatedHamburgerButton";
import { motion } from "framer-motion";

// const navItems = [
//   { href: "/", title: "Home" },
//   { href: "#projects", title: "Projects" },
//   { href: "#about", title: "About" },
//   { href: "#contact", title: "Contact" },
// ];

const DURATION = 0.25;
const STAGGER = 0.025;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle between open and closed
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="w-full py-4 px-2 lg:px-6 fixed top-0 backdrop-blur-sm bg-transparent z-50">
      <nav className="hidden md:flex justify-between items-center max-w-screen-xl mx-auto">
        <div>
          <img src={logo} alt="logo" width={70} height={70} />
        </div>
        <ul className="flex items-center gap-8 text-white text-[1.5rem]">
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

      <div className="flex items-center justify-between md:hidden w-full">
        <div>
          <img src={logo} alt="logo" width={70} height={70} />
        </div>
        <div onClick={toggleMenu}>
          <AnimatedHamburgerButton />
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
          className="md:hidden container bg-primaryText h-screen w-full bg-black py-10 px-6 rounded-lg"
        >
          <div className="mt-[5rem]">
            <ul className="flex flex-col gap-8 items-center text-white outfit font-bold">
              <FlipLink href="/">Home</FlipLink>
              <FlipLink href="#about">About</FlipLink>
              <FlipLink href="#nft">NFTs</FlipLink>
              <FlipLink href="#roadmap">Roadmap</FlipLink>
              <FlipLink href="#tokenomics">Tokenomics</FlipLink>
              {/* <FlipLink href="#">FAQs</FlipLink> */}
            </ul>
            <div>
              <h2></h2>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden text-center whitespace-nowrap text-3xl font-bold uppercase sm:text-4xl md:text-5xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <div className="bg-neutral-100 py-20">
//       <SlideTabs />
//     </div>
//   );
// };

// const SlideTabs = () => {
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   return (
//     <ul
//       onMouseLeave={() => {
//         setPosition((pv) => ({
//           ...pv,
//           opacity: 0,
//         }));
//       }}
//       className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
//     >
//       <Tab setPosition={setPosition}>Home</Tab>
//       <Tab setPosition={setPosition}>Pricing</Tab>
//       <Tab setPosition={setPosition}>Features</Tab>
//       <Tab setPosition={setPosition}>Docs</Tab>
//       <Tab setPosition={setPosition}>Blog</Tab>

//       <Cursor position={position} />
//     </ul>
//   );
// };

// const Tab = ({ children, setPosition }) => {
//   const ref = useRef(null);

//   return (
//     <li
//       ref={ref}
//       onMouseEnter={() => {
//         if (!ref?.current) return;

//         const { width } = ref.current.getBoundingClientRect();

//         setPosition({
//           left: ref.current.offsetLeft,
//           width,
//           opacity: 1,
//         });
//       }}
//       className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
//     >
//       {children}
//     </li>
//   );
// };

// const Cursor = ({ position }) => {
//   return (
//     <motion.li
//       animate={{
//         ...position,
//       }}
//       className="absolute z-0 h-7 rounded-full bg-black md:h-12"
//     />
//   );
// };

// export default Navbar;
