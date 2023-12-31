"use client";

import { BackgroundImage, Container } from "@/components/Common";
import SupportBox from "./SupportBox";
import SupportLeft from "./SupportLeft";
import { homeSupportBg } from "../../../../public/assets/images";

const Support = () => (
  <BackgroundImage img={homeSupportBg} className="my-2.5 md:my-5 min-h-full">
    <Container className="flex flex-col md:flex-row justify-center items-center gap-[5%] pt-2.5 pb-10 md:pb-16 w-[400px] ">
      <SupportLeft />
      <SupportBox />
    </Container>
  </BackgroundImage>
);

export default Support;
