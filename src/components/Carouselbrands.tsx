// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
export const Carouselbrands = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-28" src="../../public/logocar.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-28" src="../../public/logocar1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-28" src="../../public/logocar2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-28" src="../../public/logocar3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-28" src="../../public/logocar4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-28" src="../../public/logocar5.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
