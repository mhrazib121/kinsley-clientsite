import AdditionalServices from "@/Container/Home/AdditionalServices";
import Services from "@/Container/Home/Services";
import Support from "@/Container/Home/Support";
import Testimonials from "@/Container/Home/Testimonials";
import { Header } from "@/components/Shared/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";
import Carousel from "@/Container/Home/carousel";
import { carouselData } from "@/Container/Home/carousel/carouselData";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "session");
  return (
    <div>
      {/* <PublicHeader /> */}
      <Header />
      <div className="w-full  mx-auto justify-center my-4">
        <Carousel data={carouselData} />
      </div>

      <Services />
      <Testimonials />
      <AdditionalServices />
      <Support />

      <div className="min-h-[calc(10vh-6px)]"> </div>
    </div>
  );
}
