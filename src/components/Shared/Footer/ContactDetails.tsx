"use client";

import { CommonText, Logo } from "@/components/Common";
import { ContactInfo } from ".";

export const ContactDetails = () => {
  return (
    <div className="w-full lg:w-auto mb-8 xl:mb-[58px] flex lg:block flex-col justify-center items-center">
      <div className="flex flex-col gap-4 mb-9 ">
        <Logo />
        <CommonText text="sm">
          Kinsley is a luxury hotel and restaurant. The following pains are
          resolved by <br />
          providing them with reason. All do not know that they are but,
          <br /> his pleasures a matter of the body.
        </CommonText>
      </div>

      <ContactInfo />
    </div>
  );
};
