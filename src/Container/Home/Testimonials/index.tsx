import { BackgroundImage } from "@/components/Common";
import { FaQuoteLeft } from "react-icons/fa";
import { faces1, testimonialBanner } from "../../../../public/assets/images";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div>
      <BackgroundImage
        img={testimonialBanner}
        className="my-2.5 md:my-5 min-h-full w-full "
      >
        <div className="bg-[#0000009f] py-12 md:py-20">
          <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row justify-center items-center gap-5 ">
            <div className="hero-overlay bg-opacity-25"></div>
            <div className="hero-content  text-neutral-content  py-14">
              <div className="flex flex-col lg:flex-row lg:px-12 px-5 my-10 gap-5">
                {/* Header */}
                <div className="w-full lg:w-7/12 flex flex-col justify-start items-start gap-5">
                  <span className="text-2xl font-serif font-bold text-secondary">
                    Our Testimonials
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
                    Good Reviews By <br />{" "}
                    <span className="text-primary">Clients</span>
                  </h2>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                {/* testimonial section */}
                <div className="w-full lg:w-8/12 ">
                  <p className="text-white text-lg flex justify-start gap-2">
                    <span className="text-primary text-3xl">
                      <FaQuoteLeft />
                    </span>
                    <i className="text-xl">
                      Lorem Ipsum is simply dummy text of the printing
                      andypesetting industry. Lorem ipsum a simple Lorem Ipsum
                      has been the industrys standard dummy hic et quidem.
                      Dignissimos maxime velit unde inventore quasi vero
                      dolorem.
                    </i>
                  </p>
                  <div className="flex justify-center lg:justify-start items-center gap-5 py-10 ">
                    <div className=" ">
                      <Image className="rounded-full" src={faces1} alt="" />
                    </div>

                    <div>
                      <h5 className="text-secondary font-serif text-xl font-bold">
                        Kelton Mick
                      </h5>
                      <span className="text-white text-md font-semibold">
                        Manager
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Testimonials;
