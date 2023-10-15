import Image, { StaticImageData } from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

export interface ServiceCardProps {
  img: StaticImageData;
  h2: string;
  title: string;
  rating: string;
  details: string;
  time: string;
  price: string;
  discount: string;
}

const ServiceCard = ({ service }: { service: ServiceCardProps }) => {
  const { img, h2, title, rating, details, time, price, discount } = service;
  return (
    <div className="flex rounded-xl shadow-xl w-5/6 lg:w-full z-1">
      {" "}
      <div className="relative w-full lg:w-[350px] overflow-hidden">
        <span className="absolute top-14 -left-20 font-bold bg-warning px-20 py-2 text-xl text-white -rotate-45">
          <span className="pl-8">{discount}% OFF</span>
        </span>
        <Image
          className="lg:max-w-[300px] w-full h-[300px] lg:h-full rounded-s-lg"
          src={img}
          alt={h2}
        />
      </div>
      <div className="flex flex-col p-6 text-start">
        <h2 className="text-primary text-lg  font-serif font-semibold ">
          {h2}
        </h2>
        <h1 className="text-2xl font-serif font-semibold hover:text-primary">
          {title}
        </h1>
        <span className="flex justify-start items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary "
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-secondary"
              checked
            />
          </div>
          <span className="px-1">({rating})</span>
        </span>
        <p className="text-base pt-2">{details}</p>
        <p className="text-primary font-semibold flex justify-start items-center gap-2">
          <FaRegCalendarAlt /> {time} Tours
        </p>
        <div className="card-actions justify-start border-t pt-3">
          <div className="flex justify-center items-center gap-2">
            <span className="text-primary text-xl font-bold">${price}</span>

            <span className="text-lg text-gray-500 font-semibold">
              {" "}
              | Per person
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
