"use client";
// import ICONS from "@/src/assets/icons";
import { Carousel } from "antd";
import Image, { StaticImageData } from "next/image";

interface ICarousel {
  link?: string;
  img: StaticImageData;
}
const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselCom = ({ data }: { data: ICarousel[] }) => {
  return (
    <div className="bg-red-3 ">
      <Carousel autoplay>
        {data.map((p) => (
          <div key={`${p.img}`} className="w-full">
            <Image className="w-full h-[590px]" src={p.img} alt="banner" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCom;
