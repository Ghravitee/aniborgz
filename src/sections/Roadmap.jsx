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
            <h1 className="text-2xl unlock">
              Phase 1: Initial Solana Launch and Community Building
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Token Presale on Solana</p>
            </div>
            <div>
              <p>
                Launch the $BORGZ token presale, accepting SOL from early
                investors, who will receive exclusive benefits like discounted
                tokens, staking rewards, and whitelist access to Aniborgz NFTs.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Aniborgz NFT Collection on Magic Eden</p>
            </div>
            <div>
              <p>
                Mint and launch the exclusive Aniborgz NFTs on Magic Eden.
                Whitelisted presale participants will have early access to these
                NFTs, which come with unique in-game privileges, staking
                bonuses, and governance rights within the Borgz ecosystem.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Community Growth Initiatives</p>
            </div>
            <div>
              <p>
                Kickstart community-building activities, including social media
                campaigns, influencer partnerships, and community engagement to
                establish Borgz’s presence in the gaming and blockchain
                communities.
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
            <h1 className="text-2xl unlock">
              Phase 1: Initial Solana Launch and Community Building
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Token Presale on Solana</p>
            </div>
            <div>
              <p>
                Launch the $BORGZ token presale, accepting SOL from early
                investors, who will receive exclusive benefits like discounted
                tokens, staking rewards, and whitelist access to Aniborgz NFTs.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Aniborgz NFT Collection on Magic Eden</p>
            </div>
            <div>
              <p>
                Mint and launch the exclusive Aniborgz NFTs on Magic Eden.
                Whitelisted presale participants will have early access to these
                NFTs, which come with unique in-game privileges, staking
                bonuses, and governance rights within the Borgz ecosystem.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Community Growth Initiatives</p>
            </div>
            <div>
              <p>
                Kickstart community-building activities, including social media
                campaigns, influencer partnerships, and community engagement to
                establish Borgz’s presence in the gaming and blockchain
                communities.
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
              Phase 2: Ecosystem Development and Enhanced Utility on Solana
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Enhanced Staking Rewards</p>
            </div>
            <div>
              <p>
                Activate the boosted staking rewards for presale investors,
                providing early holders with higher returns on their $BORGZ
                tokens.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Exclusive Governance Rollout</p>
            </div>
            <div>
              <p>
                Grant presale investors early voting rights to participate in
                the Borgz DAO, enabling them to influence important decisions in
                the ecosystem as it takes shape.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Game and NFT Utility Expansion</p>
            </div>
            <div>
              <p>
                Develop initial use cases and in-game utility for Aniborgz NFTs
                within partner games on Solana, allowing holders to experience
                the perks of in-game assets in real-time.
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
              Phase 2: Ecosystem Development and Enhanced Utility on Solana
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Enhanced Staking Rewards</p>
            </div>
            <div>
              <p>
                Activate the boosted staking rewards for presale investors,
                providing early holders with higher returns on their $BORGZ
                tokens.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Exclusive Governance Rollout</p>
            </div>
            <div>
              <p>
                Grant presale investors early voting rights to participate in
                the Borgz DAO, enabling them to influence important decisions in
                the ecosystem as it takes shape.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Game and NFT Utility Expansion</p>
            </div>
            <div>
              <p>
                Develop initial use cases and in-game utility for Aniborgz NFTs
                within partner games on Solana, allowing holders to experience
                the perks of in-game assets in real-time.
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
              Phase 3: Transition to Cosmos and Cross-Chain Compatibility
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Cosmos-Based Borgz Blockchain Development</p>
            </div>
            <div>
              <p>
                Begin developing the Borgz blockchain using Cosmos SDK,
                designing it specifically to support high-speed transactions,
                low fees, and customizable gaming-focused features.
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
                Leverage Injective’s interoperability technology to create a
                cross-chain bridge, allowing $BORGZ tokens and Aniborgz NFTs to
                be seamlessly moved from Solana to the Cosmos-based Borgz
                blockchain.
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
              Phase 3: Transition to Cosmos and Cross-Chain Compatibility
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Cosmos-Based Borgz Blockchain Development</p>
            </div>
            <div>
              <p>
                Begin developing the Borgz blockchain using Cosmos SDK,
                designing it specifically to support high-speed transactions,
                low fees, and customizable gaming-focused features.
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
                Leverage Injective’s interoperability technology to create a
                cross-chain bridge, allowing $BORGZ tokens and Aniborgz NFTs to
                be seamlessly moved from Solana to the Cosmos-based Borgz
                blockchain.
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
              Phase 4: Cosmos Mainnet Launch and Marketplace Integration
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Mainnet Launch on Cosmos SDK</p>
            </div>
            <div>
              <p>
                Activate the boosted staking rewards for presale investors,
                providing early holders with higher returns on their $BORGZ
                tokens.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Exclusive Governance Rollout</p>
            </div>
            <div>
              <p>
                Grant presale investors early voting rights to participate in
                the Borgz DAO, enabling them to influence important decisions in
                the ecosystem as it takes shape.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Game and NFT Utility Expansion</p>
            </div>
            <div>
              <p>
                Develop initial use cases and in-game utility for Aniborgz NFTs
                within partner games on Solana, allowing holders to experience
                the perks of in-game assets in real-time.
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
              Phase 4: Cosmos Mainnet Launch and Marketplace Integration
            </h1>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Mainnet Launch on Cosmos SDK</p>
            </div>
            <div>
              <p>
                Activate the boosted staking rewards for presale investors,
                providing early holders with higher returns on their $BORGZ
                tokens.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Exclusive Governance Rollout</p>
            </div>
            <div>
              <p>
                Grant presale investors early voting rights to participate in
                the Borgz DAO, enabling them to influence important decisions in
                the ecosystem as it takes shape.
              </p>
            </div>
            <div className="flex gap items-center gap-4">
              <div>
                <div className="h-6 w-6 rounded-full border-2 border-gray-400" />
              </div>
              <p className="">Game and NFT Utility Expansion</p>
            </div>
            <div>
              <p>
                Develop initial use cases and in-game utility for Aniborgz NFTs
                within partner games on Solana, allowing holders to experience
                the perks of in-game assets in real-time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
