import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { HomeIcon } from "@heroicons/react/24/outline";
import { RiSearchLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="relative">
      <div className="">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={true}
          loop={true}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          className="w-[100%] pb-3 sm:h-[800px] h-[584px]"
        >
          <SwiperSlide>
            <img
              src={img1}
              alt="junk"
              className="block h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="flex-grow items-center ml-10 mt-60">
                <h2 className="text-white sm:text-6xl text-4xl font-bold break-words">
                  Discover Your <br /> Dream Home
                </h2>
                <p className="text-white text-xl font-semibold pt-10">
                  Your one-stop real estate destination for buying, <br />
                  renting, and selling properties.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="junk"
              className="block h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="flex-grow items-center ml-10 mt-60">
                <h2 className="text-white sm:text-6xl text-4xl font-bold break-words">
                  Discover Your <br /> Dream Home
                </h2>
                <p className="text-white text-xl font-semibold pt-10">
                  Your one-stop real estate destination for buying, <br />
                  renting, and selling properties.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="junk"
              className="block h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="flex-grow items-center ml-10 mt-60">
                <h2 className="text-white sm:text-6xl text-4xl font-bold break-words">
                  Discover Your <br /> Dream Home
                </h2>
                <p className="text-white text-xl font-semibold pt-10">
                  Your one-stop real estate destination for buying, <br />
                  renting, and selling properties.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute sm:-bottom-6 -bottom-24 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-2xl sm:min-w-max max-w-[400px]">
        <div className="p-4 flex sm:flex-row flex-col gap-3">
          <div className="flex items-center gap-x-3">
            <h3 className="bg-amber-50 px-[24px] py-[16px] rounded-2xl flex items-center gap-2 font-bold text-xs">
              <HomeIcon
                className="sm:block hidden h-6 w-6"
                aria-hidden="true"
              />
              For sale
            </h3>
            <h3 className="border border-amber-100 px-[24px] py-[16px] rounded-2xl flex items-center gap-2 font-bold text-xs">
              <HomeIcon
                className="sm:block hidden h-6 w-6"
                aria-hidden="true"
              />
              For rent
            </h3>
            <h3 className="border border-amber-100 px-[24px] py-[16px] rounded-2xl flex items-center gap-2 font-bold text-xs">
              <HomeIcon
                className="sm:block hidden h-6 w-6"
                aria-hidden="true"
              />
              For investment
            </h3>
          </div>
          <div className="flex gap-x-1">
            <input
              type="text"
              name="price"
              id="price"
              className="rounded-xl border border-amber-600 py-1.5 pl-7 pr-20 text-gray-900"
              placeholder="Enter City, Zip, Address"
            />
            <button className="px-[24px] py-[16px] gap-x-2 bg-amber-600 rounded-xl sm:hidden block">
              <RiSearchLine />
            </button>
          </div>

          <button className="px-[24px] py-[16px] gap-x-2 bg-amber-600 rounded-xl sm:flex items-center hidden">
            <RiSearchLine />
            <span className="font-semibold">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
}
