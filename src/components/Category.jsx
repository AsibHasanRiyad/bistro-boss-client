import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

export default function Category() {
  return (
    <div className=" mt-4 mb-8 md:mt-12 md:mb-24">
       <div className=" py-10">
       <SectionTitle heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
       </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h1 className=" text-xl md:text-3xl text-center -mt-16 text-gray-100 font-normal">Salads</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className=" text-xl md:text-3xl text-center -mt-16 text-gray-100 font-normal">Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className=" text-xl md:text-3xl text-center -mt-16 text-gray-100 font-normal">Soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className=" text-xl md:text-3xl text-center -mt-16 text-gray-100 font-normal">Desert</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className=" text-xl md:text-3xl text-center -mt-16 text-gray-100 font-normal">Salad</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
