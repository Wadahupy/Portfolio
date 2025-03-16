import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

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
    <div className="max-w-screen-2xl mx-auto py-8 mt-15">
      <motion.h1
        className="md:text-6xl text-5xl font-bold text-center mb-6 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        CERTIFICATES
      </motion.h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2} // Default for larger screens
        breakpoints={{
          300: {
            slidesPerView: 1, // For small screens
          },
          600: {
            slidesPerView: 2, // For small screens
          },
          1024: {
            slidesPerView: 2, // For medium and large screens
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="relative w-full h-[520px] py-4 rounded-2xl shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-[420px]">
            <img
              src={image}
              alt={`slide ${index + 1}`}
              className=" md:mx-0 mx-5 w-full h-full object-obtain rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageSlider;
