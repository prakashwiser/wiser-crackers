import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
function Swiperr() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="banner"
          src="https://static.vecteezy.com/system/resources/previews/003/310/977/non_2x/happy-diwali-holiday-background-for-light-festival-of-india-vector.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="banner"
          src="https://www.wallpapertip.com/wmimgs/59-597982_happy-diwali-crackers-hd.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Swiperr;
