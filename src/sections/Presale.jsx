const Presale = () => {
  return (
    <div id="presale" className="max-w-[1300px] mx-auto py-10 px-5 md:py-20">
      <div className="mb-6 relative leading-7 uppercase unlock font-black">
        {/* Large Background Text */}
        <h2 className="text-center text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
          PRESALE PROCESS
        </h2>
        {/* Foreground Text */}
        <h2 className="absolute left-0 right-0 top-4 mx-auto text-center text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] dark:text-white text-black">
          PRESALE PROCESS
        </h2>
      </div>

      {/* Vertical Divider */}
      <div className="h-20 md:h-28 w-[2px] bg-gray-700 mx-auto" />

      {/* Horizontal Dividers with Columns */}
      <div className="w-full sm:w-[80%] md:w-[60%] mx-auto">
        <div className="h-[2px] w-full bg-gray-700" />
        <div className="flex justify-between">
          <div className="h-20 md:h-28 w-[2px] bg-gray-700" />
          <div className="h-20 md:h-28 w-[2px] bg-gray-700" />
        </div>
      </div>

      <div className="relative md:hidden flex flex-col md:flex-row justify-between text-white w-full sm:w-[80%] mx-auto">
        <div className="h-full w-[2px] bg-gray-700" />
        <div className="flex justify-between items-center">
          <div className="w-[30%] h-[2px] bg-gray-700" />
          <div className="w-[30%] h-[2px] bg-gray-700" />
        </div>
        <div className="h-full w-[2px] bg-gray-700" />
        <div className="absolute left-0 right-0 mx-auto -top-[15%] flex flex-col items-center text-center">
          <h2 className="text-xl sm:text-2xl">Phase 1</h2>
          <h2 className="text-sm sm:text-base">
            Direct Contribution to Aniborgz Wallet
          </h2>
        </div>
        <div className="h-20 md:h-28 w-[2px] bg-gray-700 mx-auto" />
        <div className="max-w-[20rem] px-4 py-3 md:px-6 md:py-4 border border-gray-500 rounded-xl mx-auto ">
          <p className="text-sm sm:text-base text-white ">
            In the first phase, early supporters can contribute directly to the
            official Aniborgz Solana wallet to purchase $BORGZ tokens. This
            private round rewards our earliest backers with a discounted token
            price and guaranteed whitelist access to the exclusive Aniborgz NFT
            collection on Magic Eden.
          </p>
        </div>
      </div>

      <section className="md:hidden">
        <div className="h-20 md:h-28 w-[2px] bg-gray-700 mx-auto" />
        {/* Horizontal Dividers with Columns */}
        <div className="w-full sm:w-[80%] md:w-[60%] mx-auto">
          <div className="h-[2px] w-full bg-gray-700" />
          <div className="flex justify-between">
            <div className="h-20 md:h-28 w-[2px] bg-gray-700" />
            <div className="h-20 md:h-28 w-[2px] bg-gray-700" />
          </div>
        </div>
        {/* Phases Section */}
        {/* <div className="flex flex-col md:flex-row justify-between text-white w-full sm:w-[80%] mx-auto gap-8 md:gap-0">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-xl sm:text-2xl">Phase 1</h2>
              <h2 className="text-sm sm:text-base">
                Direct Contribution to Aniborgz Wallet
              </h2>
            </div>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-xl sm:text-2xl">Phase 2</h2>
              <h2 className="text-sm sm:text-base">Public Presale on GemPad</h2>
            </div>
          </div> */}
        {/* <div className="flex flex-col items-center text-center">
              <h2 className="text-xl sm:text-2xl">Phase 2</h2>
              <h2 className="text-sm sm:text-base">Public Presale on GemPad</h2>
            </div> */}
        <div className="relative md:hidden flex flex-col md:flex-row justify-between text-white w-full sm:w-[80%] mx-auto">
          <div className="h-full w-[2px] bg-gray-700" />
          <div className="flex justify-between items-center">
            <div className="w-[30%] h-[2px] bg-gray-700" />
            <div className="w-[30%] h-[2px] bg-gray-700" />
          </div>
          <div className="h-full w-[2px] bg-gray-700" />
          <div className="absolute left-0 right-0 mx-auto -top-[15%] flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-2xl">Phase 2</h2>
            <h2 className="text-sm sm:text-base">Public Presale on GemPad</h2>
          </div>
          <div className="h-20 md:h-28 w-[2px] bg-gray-700 mx-auto" />
          <div className="max-w-[20rem] px-4 py-3 md:px-6 md:py-4 border border-gray-500 rounded-xl mx-auto">
            <p className="text-sm sm:text-base text-white">
              Following the initial round, $BORGZ will enter the second phase
              with a public presale on GemPad, giving a broader audience the
              opportunity to participate in the Borgz ecosystem. GemPad will
              provide additional security and transparency for all participants
              and serve as the official platform for the public sale.
            </p>
          </div>
        </div>
      </section>

      {/* Smaller Vertical Dividers */}
      <div className="hidden md:flex justify-between w-full sm:w-[80%] md:w-[60%] mx-auto">
        <div className="h-12 md:h-16 w-[2px] bg-gray-700" />
        <div className="h-12 md:h-16 w-[2px] bg-gray-700" />
      </div>

      {/* Description Cards */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center w-full sm:w-[80%] mx-auto gap-6 md:gap-8">
        <div className="max-w-[20rem] px-4 py-3 md:px-6 md:py-4 border border-gray-500 rounded-xl">
          <p className="text-sm sm:text-base text-white">
            In the first phase, early supporters can contribute directly to the
            official Aniborgz Solana wallet to purchase $BORGZ tokens. This
            private round rewards our earliest backers with a discounted token
            price and guaranteed whitelist access to the exclusive Aniborgz NFT
            collection on Magic Eden.....
          </p>
        </div>
        <div className="max-w-[20rem] px-4 py-3 md:px-6 md:py-4 border border-gray-500 rounded-xl">
          <p className="text-sm sm:text-base text-white">
            Following the initial round, $BORGZ will enter the second phase with
            a public presale on GemPad, giving a broader audience the
            opportunity to participate in the Borgz ecosystem. GemPad will
            provide additional security and transparency for all participants
            and serve as the official platform for the public sale....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presale;
