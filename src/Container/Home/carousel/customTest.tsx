"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { carouselData } from "./carouselData";
import style from "./style.module.css";

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const handleIndexUpdate = () => {
      if (carouselData?.length - 1 > index) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIndex(0);
      }
    };
    intervalId = setInterval(handleIndexUpdate, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <div className={style.carousel_container}>
      {/* <ICONS.LeftArrow
        className={style.LeftArrow}
        fill="#adacac"
        onClick={() => {
          if (index === 0) {
            setIndex(carouselData?.length - 1);
          } else {
            setIndex(index - 1);
          }
        }}
      /> */}
      {carouselData?.map((p, i) => (
        <div key={i}>
          {index === i && (
            <div className={style.img_container}>
              <Link href={`${p.link}`}>
                <Image
                  className={style.img}
                  src={p.img}
                  alt="promotional-banner"
                />
              </Link>
            </div>
          )}
        </div>
      ))}

      {/* <ICONS.RightArrow
        className={style.RightArrow}
        fill="#adacac"
        onClick={() => {
          if (carouselData?.length - 1 > index) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
      /> */}
      <div className={style.dotIconContainer}>
        {carouselData?.map((p, i) => (
          <div
            key={i}
            className={style.dotIcon}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
