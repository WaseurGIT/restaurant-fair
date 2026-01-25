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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>

              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center max-w-3xl px-4 md:px-8 lg:px-16">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 momo-signature-regular">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
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