import React from "react";
const program_1 = "/assets/program-1.png";
const program_2 = "/assets/program-2.png";
const program_3 = "/assets/program-3.png";
const program_icon_1 = "/assets/program-icon-1.png";
const program_icon_2 = "/assets/program-icon-2.png";
const program_icon_3 = "/assets/program-icon-3.png";

const Programs = () => {
  return (
    <div
      className="my-20 mx-auto w-[90%] flex items-center justify-between lg:flex-row flex-col"
      id="program"
    >
      <div className="lg:basis-[31%] basis-full relative mb-10 lg:mb-0 group">
        <img src={program_1} alt="" className="w-full rounded-[10px] block" />
        <div className="rounded-[10px] absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:pt-0">
          <img src={program_icon_1} alt="" className="w-[60px] mb-2.5" />
          <p>graduation degree</p>
        </div>
      </div>
      <div className="lg:basis-[31%] basis-full relative mb-10 lg:mb-0 group">
        <img src={program_2} alt="" className="w-full rounded-[10px] block" />
        <div className="rounded-[10px] absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:pt-0">
          <img src={program_icon_2} alt="" className="w-[60px] mb-2.5" />
          <p>graduation degree</p>
        </div>
      </div>
      <div className="lg:basis-[31%] basis-full relative mb-10 lg:mb-0 group">
        <img src={program_3} alt="" className="w-full rounded-[10px] block" />
        <div className="rounded-[10px] absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:pt-0">
          <img src={program_icon_3} alt="" className="w-[60px] mb-2.5" />
          <p>graduation degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
