"use client";
import { CommonText, Container } from "@/components/Common";
import ColorText from "@/components/Common/ColorText";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  partnerLogo1,
  partnerLogo2,
  partnerLogo3,
  partnerLogo4,
} from "../../../../public/assets/paetnersLogo";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const partnersLogo = [
  {
    img: partnerLogo1,
  },
  {
    img: partnerLogo2,
  },
  {
    img: partnerLogo3,
  },
  {
    img: partnerLogo4,
  },
  {
    img: partnerLogo2,
  },
  {
    img: partnerLogo3,
  },
  {
    img: partnerLogo4,
  },
  {
    img: partnerLogo1,
  },
  {
    img: partnerLogo4,
  },
  {
    img: partnerLogo2,
  },
];

const Partners = () => {
  return (
    <Container>
      <p className="text-center my-2">
        <ColorText>Our Partners</ColorText>
      </p>
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-center py-4">
        Who are <span className="text-primary">believe</span> with us
      </h2>
      <CommonText className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse
        rem iure ipsum, deleniti excepturi doloribus laborum itaque odit
        quisquam?
      </CommonText>
      <div className="w-[80%] mx-auto my-8">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop
          speed={900}
          autoplay={{
            delay: 1500,
            // disableOnInteraction: ,
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="logoSwiper"
        >
          {partnersLogo.map((item, index) => (
            <div key={index}>
              <SwiperSlide >
                <Image src={item.img} style={{ width: "100%" }} alt="" />
              </SwiperSlide>
            </div>
          ))}
          
        </Swiper>
      </div>
    </Container>
  );
};

export default Partners;
