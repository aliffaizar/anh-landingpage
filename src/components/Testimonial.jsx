import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";

import "swiper/css/pagination";
import "./swiper.css";

const Testimonial = () => {
  return (
    <div className="w-full min-h-[350px] bg-white">
      <div className="container py-10">
        <h1 className="text-center text-3xl font-bold uppercase text-gray-600">
          testimonial
        </h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#22c55e",
          }}
        >
          <SwiperSlide>
            <div className="w-full p-10 text-center text-gray-600">
              <h3 className="text-xl font-semibold capitalize">hello</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, eius?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full p-10 text-center text-gray-600">
              <h3 className="text-xl font-semibold capitalize">hello</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, eius?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full p-10 text-center text-gray-600">
              <h3 className="text-xl font-semibold capitalize">hello</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, eius?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full p-10 text-center text-gray-600">
              <h3 className="text-xl font-semibold capitalize">hello</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, eius?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
