import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import bannerData from "./BannerData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-xl px-6 md:px-16 text-white text-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 momo-signature-regular">
                    {item.title}
                  </h1>
                  <p className="text-base md:text-lg mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
