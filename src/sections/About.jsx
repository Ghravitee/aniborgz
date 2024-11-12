import ani2 from "../assets/ani-2.webp";
import telegram from "../assets/telegram.svg";
import solana from "../assets/solana-sol-logo.svg";
// import twitter from "../assets/twitter.svg";
import binance from "../assets/binance-logo.svg";
import cmc from "../assets/coinmarketcap-1.svg";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

import { fadeIn, zoomIn } from "../utils/motion";

const About = () => {
  return (
    <div id="about" className="max-w-[1300px] mx-auto rounded-2xl my-20 px-4">
      <div className="mb-12 relative leading-7 uppercase unlock font-black">
        <h2 className=" text-center text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
          ABOUT $BORGS
        </h2>
        <h3 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] dark:text-white text-black">
          ABOUT $BORGS
        </h3>
      </div>

      <div className="grid grid-cols-[10px_1fr] gap-3 mt-20 max-w-[50rem] mx-auto">
        <div className="bg-red-900 h-full w-2" />
        <h2 className="italic text-[1.5rem]">
          Borgs Blockchain: A Cross-Chain Decentralized Gaming Platform Built
          for Ownership and Interoperability
        </h2>
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
          <p className="text-white text-xl lg:text-[1.7rem] text-center">
            Borgs Blockchain is a dedicated, decentralized ecosystem designed to
            enable true asset ownership, interoperability, and decentralized
            governance within gaming. The initial launch on Solana provides
            accessibility and liquidity, while the eventual transition to a
            custom-built Cosmos-based blockchain will support the specific
            demands of gaming: high-speed, low-cost transactions and modular,
            customizable features. Using Injective’s cross-chain technology,
            Borgs bridges Solana and Cosmos, creating a seamless multi-chain
            environment that enhances asset portability and user experience.
          </p>
          <div className="flex justify-center gap-4 items-center mt-6">
            <img src={binance} alt="" width={70} height={70} />
            <motion.a
              initial="hidden"
              whileInView="show"
              variants={fadeIn("right", "tween", 0.5, 0.5)}
              viewport={{ once: true }}
              href="https://t.me/aniborgsOnSol"
            >
              <img src={telegram} alt="" width={70} height={70} />
            </motion.a>
            <a href="">
              <img src={solana} alt="" width={70} height={70} />
            </a>

            <motion.a
              initial="hidden"
              whileInView="show"
              variants={fadeIn("left", "tween", 0.5, 0.5)}
              viewport={{ once: true }}
              href="https://x.com/aniborgsxyz"
            >
              <FaXTwitter className="text-6xl" />
            </motion.a>
            <img src={cmc} alt="" width={70} height={70} />
          </div>
        </div>
      </div>
      <h2 className="unlock text-[1.7rem] my-8">Architectural Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
        <div className="mb-6">
          <h3 className="unlock lg:text-[1.2rem]">Initial Solana Deployment</h3>
          <ul className="max-w-[35rem]">
            <li>
              • Token and NFT Foundation: Borgs begins as an SPL token ($BORGS)
              on Solana, chosen for its high throughput and low fees, which
              supports rapid adoption and community engagement.
            </li>
            <li>
              • Aniborgs NFT Collection: Aniborgs NFTs will be initially minted
              on Solana and listed on Magic Eden, Solana’s leading NFT
              marketplace. This collection introduces in-game privileges,
              staking bonuses, and governance rights, acting as foundational
              assets for the Borgs ecosystem.
            </li>
            <li>
              • Liquidity and Accessibility: Solana’s established infrastructure
              enables $BORGS and Aniborgs NFTs to reach a large user base
              quickly, laying the groundwork for the Borgs community and initial
              utility within the Solana network.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="unlock lg:text-[1.2rem]">Transition to Cosmos SDK</h3>
          <ul className="max-w-[35rem]">
            <li>
              • Custom-Built Cosmos-Based Blockchain: Borgs will transition to a
              Cosmos SDK-based blockchain specifically optimized for gaming,
              allowing for custom modules to manage in-game economies, dynamic
              NFTs, and player governance.
            </li>
            <li>
              • In-Game Economy Management: Cosmos SDK’s modular design allows
              Borgs to implement features like NFT minting, asset management,
              and in-game rewards to create a fully decentralized gaming
              economy.
            </li>
            <li>
              • Enhanced Speed and Scalability: With Tendermint Core’s consensus
              algorithm, the Borgs blockchain will handle high-frequency
              transactions and minimize latency, which is crucial for real-time
              gaming interactions.
            </li>
          </ul>
        </div>
      </div>

      {/* Second column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
        <div className="mb-6">
          <h3 className="unlock lg:text-[1.2rem]">
            Cross-Chain Interoperability with Injective
          </h3>
          <ul className="max-w-[35rem]">
            <li>
              • Injective’s Cross-Chain Bridge: Injective supports cross-chain
              asset transfers, allowing $BORGS tokens and Aniborgs NFTs to move
              from Solana to the Cosmos-based Borgs blockchain. This bridge will
              extend the utility of Aniborgs NFTs and $BORGS tokens by unlocking
              new features and staking benefits on the Borgs Cosmos network.
            </li>
            <li>
              • User-Friendly Asset Movement: Injective’s bridge will facilitate
              straightforward transfers of tokens and NFTs without requiring
              users to navigate complex bridging mechanisms, improving the
              overall user experience.
            </li>
            <li>
              • Expanding DeFi and NFT Interoperability: Injective’s cross-chain
              infrastructure will enable Borgs assets to interact with the
              broader Cosmos and Solana ecosystems, increasing asset liquidity
              and expanding use cases across DeFi and NFT platforms.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="unlock lg:text-[1.2rem]">
            Core Blockchain Features on Cosmos
          </h3>
          <ul className="max-w-[35rem]">
            <li>
              • Dynamic NFTs with In-Game Utility: Aniborgs NFTs will have
              evolving features, gaining in-game utility and staking privileges
              within the Cosmos-based Borgs ecosystem. This creates a dynamic
              environment where NFTs gain value through gameplay and can evolve
              based on player achievements or in-game milestones.
            </li>
            <li>
              • Staking and Reward Mechanisms: Borgs will integrate staking
              pools where players can earn rewards on $BORGS tokens. Early
              supporters and NFT holders will receive enhanced staking benefits,
              rewarding long-term engagement within the ecosystem.
            </li>
            <li>
              • DAO Governance: The Cosmos-based Borgs blockchain will support a
              DAO, allowing $BORGS holders to participate in governance
              decisions.
            </li>
          </ul>
        </div>
      </div>

      {/* Third column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
        <div className="mb-6">
          <h3 className="unlock lg:text-[1.2rem]">Token Model and Utility</h3>
          <ul className="max-w-[35rem]">
            <li>
              • Primary In-Game Currency: $BORGS will function as the primary
              currency within the Borgs ecosystem, used for in-game
              transactions, asset purchases, and ecosystem governance.
            </li>
            <li>
              • Staking and Rewards: Token holders can stake $BORGS to earn
              rewards. Additionally, early adopters receive enhanced staking
              benefits, and NFT holders can access exclusive staking pools.
            </li>
            <li>
              • DAO Participation: $BORGS is a governance token, giving holders
              voting power within the Borgs DAO to influence ecosystem direction
              and decision-making.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="unlock lg:text-[1.2rem]">Aniborgs NFT Collection</h3>
          <ul className="max-w-[35rem]">
            <li>
              • Initial Launch on Solana: Aniborgs NFTs will be minted on Solana
              and initially accessible through Magic Eden. These NFTs offer
              immediate utility within the Solana ecosystem, including staking
              bonuses, in-game privileges, and early voting rights.
            </li>
            <li>
              • Enhanced Utility on Cosmos: Upon transitioning to Cosmos,
              Aniborgs NFTs will unlock additional staking bonuses, unique
              in-game items, and governance privileges, growing in value and
              functionality over time.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
