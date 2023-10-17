import { Container } from "@/components/Common";
import Image, { StaticImageData } from "next/image";
import { gym, lunchBar, pool } from "../../../../public/assets/images/services";
import "./style.css";

const additionalServiceData: {
  img: StaticImageData;
  title: string;
  des: string;
}[] = [
  {
    img: gym,
    title: "Gym",
    des: "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
  },
  {
    img: pool,
    title: "Pool",
    des: "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
  },
  {
    img: lunchBar,
    title: "Lunch Bar",
    des: "Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
  },
];

const AdditionalServices = () => {
  return (
    <Container className="bg-base-100 py-12">
      <h1 className="text-center text-3xl my-12">Additional Facilities</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between relative ">
        {additionalServiceData.map((data) => (
          <div key={data.title} className="relative group mb-4 md:mb-0">
            <div className="absolute bg-base-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Offer
            </div>
            <div className="relative w-full">
              <div className="w-[280px] h-[350px] md:w-[340px] md:h-[430px] overflow-hidden">
                <Image
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500 overflow-hidden"
                  src={data.img}
                  alt={`service-${data.title}`}
                />
              </div>
              <div className="absolute bottom-6 w-full additionalServiceCard cursor-pointer">
                <div className="bg-[#e3e3e3bb] p-2 box-border w-[80%] flex mx-auto rounded-md ">
                  <div className="bg-white w-full py-3 rounded-md">
                    <h2 className="text-center w-full text-2xl">
                      {data.title}
                    </h2>
                    <div className="adServiceDes flex-col justify-center items-center">
                      <p className="text-center py-4">{data.des}</p>
                      <div>
                        <button className="bg-primary px-4 py-2 rounded-xl text-white">
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AdditionalServices;
