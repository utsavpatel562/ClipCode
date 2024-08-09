import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import GlobalContextProvider, { useGlobalContext } from "@/ContextApi";
import { IconPlus } from "@tabler/icons-react";
export default function SwiperSelection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div
        className={`${
          darkMode[1].isSelected ? "bg-slate-900 text-white" : "bg-white"
        } p-3 rounded-lg flex gap-5 my-3`}
      >
        {/*Second Div*/}
        <div className="overflow-x-auto w-[1112px]">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            freeMode={true}
            className="mySwiper"
            modules={[FreeMode]}
          >
            <SwiperSlide className="bg-green-600 p-1 rounded-md text-white w-20">
              All
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
              Typescript exercies
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">React exercies</SwiperSlide>
            <SwiperSlide className="text-slate-400">
              Javascript exercies
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
              Next.js exercies
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">
              Tailwind exercies
            </SwiperSlide>
            <SwiperSlide className="text-slate-400">Java exercies</SwiperSlide>
            <SwiperSlide className="text-slate-400">C++ exercies</SwiperSlide>
            <SwiperSlide className="text-slate-400">
              Python exercies
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="bg-green-600 p-1 text-white rounded-md px-3 flex gap-1 items-center text-center">
          <IconPlus style={{ fontSize: 12 }} />
          <span>Tag</span>
        </button>
      </div>
    </>
  );
}
