import React from "react";
const gallery_1 = "/assets/gallery-1.png";
const gallery_2 = "/assets/gallery-2.png";
const gallery_3 = "/assets/gallery-3.png";
const gallery_4 = "/assets/gallery-4.png";
const white_arrow = "/assets/white-arrow.png";

function Campus() {
  return (
    <div className="my-20 mx-auto w-[90%] text-center" id="campus">
      <div className="flex items-center justify-between mb-10 lg:flex-nowrap flex-wrap gap-4">
        <img
          src={gallery_1}
          alt=""
          className="lg:w-[23%] w-full rounded-[10px]"
        />
        <img
          src={gallery_2}
          alt=""
          className="lg:w-[23%] w-full rounded-[10px]"
        />
        <img
          src={gallery_3}
          alt=""
          className="lg:w-[23%] w-full rounded-[10px]"
        />
        <img
          src={gallery_4}
          alt=""
          className="lg:w-[23%] w-full rounded-[10px]"
        />
      </div>
      <button className="btn bg-[#212EA0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a2480] transition-all shadow-md inline-flex items-center">
        Explore Campus <img src={white_arrow} alt="" className="ml-[10px] w-5" />
      </button>
    </div>
  );
}

export default Campus;
