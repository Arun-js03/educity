import React from "react";
const dark_arrow = "/assets/dark-arrow.png";

function Hero() {
  return (
    <div
      className="hero container w-full min-h-screen bg-[linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)),url(/assets/hero.png)] bg-cover bg-center text-white flex items-center justify-center"
      id="hero"
    >
      <div className="text-center max-w-[800px]">
        <h1 className="text-[35px] md:text-[50px] lg:text-[60px] font-semibold">
          We Ensure Better education for a better world
        </h1>
        <p className="max-w-[700px] my-2.5 mx-auto mb-5 leading-[1.4] text-[14px] md:text-[16px]">
          {" "}
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <button className="btn bg-white text-[#212121] py-[14px] px-[25px] text-base">
          Explore More <img src={dark_arrow} alt="" className="ml-[10px] w-5" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
