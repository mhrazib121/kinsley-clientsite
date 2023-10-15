"use client";

import Image from "next/image";
import { FooterTitle } from ".";
import { contactInfo } from "../../../../public/Data";
import { CommonText } from "@/components/Common";

export const ContactInfo = () => (
  <div className="flex flex-col gap-[10px]">
    <FooterTitle text="sm">Contact Info</FooterTitle>
    <div className="flex flex-col gap-[10px]">
      {contactInfo.map(({ icon, number, time, title }, i) => (
        <div key={i} className="flex justify-start items-center gap-[10px]">
          <Image src={icon} alt="" />
          <CommonText>
            {title}: {number} ({time})
          </CommonText>
        </div>
      ))}
    </div>
  </div>
);
