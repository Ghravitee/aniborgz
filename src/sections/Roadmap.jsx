import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Roadmap = () => {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div id="roadmap" className="max-w-[1300px] mx-auto my-20 px-6">
      <div className="mb-24 relative leading-7 uppercase unlock font-black">
        <h2 className=" text-center text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
          ROADMAP
        </h2>
        <h2 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] dark:text-white text-black">
          ROADMAP
        </h2>
      </div>
      <h3 className="text-white text-center text-2xl unlock">
        Our Vision and Path to the Future
      </h3>

      <div className="mt-10">
        <div className="grid-container">
          <div>{/* <img src={ani12} alt="" /> */}</div>
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">01</p>
              </div>
              <motion.div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 0.5)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">Phase 1: Initial Solana Launch</h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Token sale</p>
            </div>
            <div>
              <p>
                Launch $BORGZ offering investors discounts, staking rewards, and
                whitelist access to Aniborgz NFTs.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">NFT Launch on Magic Eden</p>
            </div>
            <div>
              <p>
                Introduce the Aniborgz NFT collection on Magic Eden, providing
                immediate in-game perks and governance rights.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex md:hidden gap-6">
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">01</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 0.5)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">Phase 1: Initial Solana Launch</h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Token sale</p>
            </div>
            <div>
              <p>
                Launch $BORGZ offering investors discounts, staking rewards, and
                whitelist access to Aniborgz NFTs.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">NFT Launch on Magic Eden</p>
            </div>
            <div>
              <p>
                Introduce the Aniborgz NFT collection on Magic Eden, providing
                immediate in-game perks and governance rights.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Phase 2 */}
        {/* Phase 2 */}
        {/* Phase 2 */}
        {/* Phase 2 */}
        <div className="grid-container my-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "tween", 0.5, 0.5)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 2: Expanding Utility and Staking on Solana
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Enhanced Staking Program</p>
            </div>
            <div>
              <p>Activate boosted staking rewards for early investors.</p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Early DAO Participation</p>
            </div>
            <div>
              <p>
                Initiate governance privileges for early investors, allowing
                them to participate in key ecosystem decisions.
              </p>
            </div>
          </motion.div>
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">02</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <div>{/* <img src={ani12} alt="" /> */}</div>
        </div>

        <div className="md:hidden flex my-6 gap-6">
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">02</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 0.9)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 2: Expanding Utility and Staking on Solana
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Enhanced Staking Program</p>
            </div>
            <div>
              <p>Activate boosted staking rewards for early investors.</p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Early DAO Participation</p>
            </div>
            <div>
              <p>
                Initiate governance privileges for early investors, allowing
                them to participate in key ecosystem decisions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Phase 3 */}
        {/* Phase 3 */}
        {/* Phase 3 */}
        {/* Phase 3 */}

        <div className="grid-container my-6">
          <div>{/* <img src={ani12} alt="" /> */}</div>
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">03</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 0.9)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 3: Transition to Cosmos SDK and Injective Integration
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Cosmos-Based Blockchain Development</p>
            </div>
            <div>
              <p>
                Begin developing the Borgz blockchain on Cosmos SDK with
                gaming-focused modules.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Cross-Chain Bridge via Injective</p>
            </div>
            <div>
              <p>
                Implement Injective’s cross-chain technology to enable the
                migration of $BORGS tokens and Aniborgs NFTs from Solana to
                Cosmos.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex md:hidden gap-6 my-6">
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">03</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 1.2)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 3: Transition to Cosmos SDK and Injective Integration
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Cosmos-Based Blockchain Development</p>
            </div>
            <div>
              <p>
                Implement Injective’s cross-chain technology to enable the
                migration of $BORGS tokens and Aniborgs NFTs from Solana to
                Cosmos.
              </p>
            </div>

            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Early Testnet Launch</p>
            </div>
            <div>
              <p>
                Deploy the Borgz testnet on Cosmos, inviting developers, early
                adopters, and community members to test features, in-game
                economies, and NFT transfers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Phase 4 */}
        {/* Phase 4 */}
        {/* Phase 4 */}
        {/* Phase 4 */}

        <div className="grid-container my-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "tween", 0.5, 1)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 4: Mainnet Launch on Cosmos and Marketplace Integration
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Mainnet Deployment</p>
            </div>
            <div>
              <p>
                Deploy the Borgz blockchain on Cosmos SDK, providing access for
                developers, gamers, and stakeholders.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">NFT Marketplace</p>
            </div>
            <div>
              <p>
                Launch a Borgz-native marketplace where players can trade,
                stake, and use NFTs within the ecosystem.
              </p>
            </div>
          </motion.div>
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">04</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <div>{/* <img src={ani12} alt="" /> */}</div>
        </div>
        <div className="flex md:hidden my-6 gap-6">
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">04</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 1.5)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 4: Mainnet Launch on Cosmos and Marketplace Integration
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Mainnet Deployment</p>
            </div>
            <div>
              <p>
                Deploy the Borgz blockchain on Cosmos SDK, providing access for
                developers, gamers, and stakeholders.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">NFT Marketplace</p>
            </div>
            <div>
              <p>
                Launch a Borgz-native marketplace where players can trade,
                stake, and use NFTs within the ecosystem.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Phase 5 */}
        {/* Phase 5 */}
        {/* Phase 5 */}
        {/* Phase 5 */}

        <div className="grid-container my-6">
          <div>{/* <img src={ani12} alt="" /> */}</div>
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">05</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 0.9)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 5: Major Exchange Listings and Partnerships
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Binance Listing</p>
            </div>
            <div>
              <p>
                Pursue listing on Binance and other major exchanges to increase
                accessibility and liquidity for $BORGZ.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">New Game Integrations</p>
            </div>
            <div>
              <p>
                Partner with game developers to add exclusive games to the Borgs
                blockchain, expanding use cases for $BORGZ and Aniborgs NFTs.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex md:hidden gap-6 my-6">
          <div className="">
            <div className="flex flex-col items-center gap-4 h-full">
              <div className="flex items-center justify-center">
                <p className="text-3xl unlock">05</p>
              </div>
              <div className="h-full w-[2px] bg-white" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.5, 1.2)}
            className="flex flex-col gap-4"
          >
            <h1 className="text-2xl unlock">
              Phase 5: Major Exchange Listings and Partnerships
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Binance Listing</p>
            </div>
            <div>
              <p>
                Pursue listing on Binance and other major exchanges to increase
                accessibility and liquidity for $BORGZ.
              </p>
            </div>

            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">New Game Integrations</p>
            </div>
            <div>
              <p>
                Partner with game developers to add exclusive games to the Borgs
                blockchain, expanding use cases for $BORGZ and Aniborgs NFTs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
