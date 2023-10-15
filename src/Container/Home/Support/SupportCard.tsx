"use client";

import { CommonText } from "@/components/Common";
import Image, { StaticImageData } from "next/image";

const SupportCard = ({
  img,
  title,
}: {
  img: StaticImageData;
  title: string;
}) => (
  <div className="w-full max-w-[313px] rounded-md shadow-md flex justify-start items-center p-2.5 bg-white gap-2.5">
    <Image src={img} alt="24/7 Free Email Support" />
    <CommonText className="text-primary font-semibold max-w-[70%]" text="xl">
      {title}
    </CommonText>
  </div>
);

export default SupportCard;
