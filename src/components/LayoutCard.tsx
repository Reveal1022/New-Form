import React from "react";

interface LayoutCardProps {
  flag: string;
  country: string;
  office: string;
  company: string;
  location: string;
}

const LayoutCard: React.FC<LayoutCardProps> = ({
  flag,
  country,
  office,
  company,
  location,
}) => {
  return (
    <div className="w-[340px] h-[236px] rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-100/20 p-5 text-[#e0e0e0] border-[0.5px] border-[#808080dc] flex flex-col gap-5 text-[0.75vw] backdrop-blur-md">
      <div className=" ">
        <img src={flag} alt="" className="w-[50px] rounded-xl mb-2" />
        <h5 className="font-semibold  text-white">{country}</h5>
        <h2 className=" font-light text-md">{office}</h2>
      </div>
      <div className=" font-light text-md">
        <p>{company}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default LayoutCard;
