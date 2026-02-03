import React from "react";

function Title({ subTitle, title }) {
  return (
    <div className="text-center text-[#212EA0] text-[15px] font-semibold uppercase mt-[70px] mb-[30px]">
      <p>{subTitle}</p>
      <h2 className="text-[32px] text-[#000F38] mt-[5px] normal-case max-[640px]:text-[22px] max-[640px]:mt-2.5">
        {title}
      </h2>
    </div>
  );
}

export default Title;
