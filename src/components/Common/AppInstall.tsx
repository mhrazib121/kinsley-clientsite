"use client";

import Image from "next/image";

import Link from "next/link";
import { appStore, playStore } from "../../../public/assets/images";
import { IClassName } from "@/interfaces";

export const AppDownloadImg = ({ className }: IClassName) => (
  <div className={`flex justify-start items-center w-full ${className}`}>
    <Link href="/" className="w-[50%]" target="_blank">
      <Image className="w-full h-auto" src={playStore} alt="" />
    </Link>
    <Link href="/" className="w-[50%]" target="_blank">
      <Image className="w-full h-auto" src={appStore} alt="" />
    </Link>
  </div>
);
