import ServiceCard from "@/components/ui/ServiceCard";
import React from "react";
import { servicesData } from "../../../../public/Data/services";

const Services = () => {
  return (
    <div className="py-12">
      <h1 className="text-center my-12">Best Featured Room</h1>
      <div className="hero bg-cover">
        <div className=" max-w-7xl mx-auto  flex flex-col lg:flex-row justify-center items-center gap-5">
          {servicesData.map((p) => (
            <ServiceCard key={p.title} service={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
