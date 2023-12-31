"use client";

import Image from "next/image";
import { supportLeftImg } from "../../../../public/assets/images";

const SupportLeft = () => (
  <div className="w-full md:w-[50%] flex justify-center items-center">
    <Image
      src={supportLeftImg}
      className="w-[85%] h-full sm:w-[60%] md:w-full"
      alt=""
    />
  </div>
);

export default SupportLeft;
