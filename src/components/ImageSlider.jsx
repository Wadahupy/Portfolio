import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

import slide_image_1 from "../assets/images/img_1.jpg";
import slide_image_2 from "../assets/images/img_2.jpg";
import slide_image_3 from "../assets/images/img_3.jpg";
import slide_image_4 from "../assets/images/img_4.jpg";
import slide_image_5 from "../assets/images/img_5.jpg";
import slide_image_6 from "../assets/images/img_6.png";
import slide_image_7 from "../assets/images/img_7.jpg";
import slide_image_8 from "../assets/images/img_8.jpg";

const images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
  slide_image_6,
  slide_image_7,
  slide_image_8,
];
const ImageSlider = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-6xl font-semibold text-center mb-6 text-white">
        CERTIFICATES
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2} // Show surrounding slides
        coverflowEffect={{
          rotate: 0,
          stretch: 50, // Increase spacing between slides
          depth: 200, // Reduce depth to bring background slides forward
          modifier: 1.5, // Adjust effect strength
          slideShadows: false, // Disable dark slide shadows
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative w-full h-[520px] py-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-[420px]">
            <img
              src={image}
              alt={`slide ${index + 1}`}
              className="w-full h-full object-obtain rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageSlider;
