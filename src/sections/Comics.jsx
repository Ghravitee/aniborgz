import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ani5 from "../assets/Ani-5.webp";
import ani6 from "../assets/Ani-6.webp";
import ani7 from "../assets/Ani-7.webp";
import ani9 from "../assets/Ani-9.webp";
import ani4 from "../assets/Ani-4.webp";
import ani13 from "../assets/Ani-13.webp";
import ani14 from "../assets/Ani-14.webp";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const cards = [
  { url: ani5, title: "Title 2", id: 1 },
  { url: ani6, title: "Title 3", id: 2 },
  { url: ani7, title: "Title 4", id: 3 },
  { url: ani9, title: "Title 5", id: 4 },
  { url: ani4, title: "Title 1", id: 5 },
  { url: ani13, title: "Title 6", id: 6 },
  { url: ani14, title: "Title 7", id: 7 },
];

const Comics = () => {
  return (
    <section
      id="nft"
      className="bg-black overflow-hidden border-t border-t-[#001a29]"
    >
      {/* <div className="mb-12 relative leading-7 uppercase unlock font-black">
        <h2 className="text-center text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[4rem] dark:text-[hsl(0_0%_100%)] text-black opacity-15 tracking-widest">
          $BORGS COLLECTION
        </h2>
        <h2 className="absolute left-0 right-0 mx-auto text-center text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] dark:text-white text-black">
          $BORGS COLLECTION
        </h2>
      </div> */}

      <div className="px-4 md:px-6 py-16">
        {/* Navigation Buttons */}
        <div className="flex justify-between gap-2 items-center mb-4">
          <h2 className="text-[2rem] font-bold">Aniborgs Collection</h2>
          <div className="flex gap-6">
            <button
              className="custom-prev bg-gray-900 text-white px-4 py-4 rounded-xl hover:bg-gray-800 border border-[#222]"
              aria-label="Previous Slide"
            >
              <FaChevronLeft />
            </button>
            <button
              className="custom-next bg-gray-900 text-white px-4 py-4 rounded-xl hover:bg-gray-800 border border-[#222]"
              aria-label="Next Slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className=""
        >
          {cards.map((testimonial, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="w-full h-full">
                <img
                  src={testimonial.url}
                  alt={testimonial.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Comics;
