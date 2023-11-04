"use client";

import Image from "next/image";
import Link from "next/link";
import { logo } from "../../../public/assets";

export const Logo = () => (
  <div className="w-fit max-w-[168px]">
    <Link href="/">
      <div className="-mb-[12px] mr-[9%] flex justify-end items-end">
        <Image src={logo} className="w-[200px] h-[40px]" alt="" />
      </div>
    </Link>
  </div>
);
