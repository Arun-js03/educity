import React from "react";
const about_img = "/assets/about.png";
const play_icon = "/assets/play-icon.png";

const About = () => {
  return (
    <div
      className="my-[100px] mx-auto flex items-center justify-between w-[90%] lg:flex-row flex-col"
      id="about"
    >
      <div className="lg:basis-2/5 basis-full relative mb-10 lg:mb-0 lg:order-1 order-2">
        <img src={about_img} alt="" className="w-full rounded-[10px]" />
        <img
          src={play_icon}
          alt=""
          className="w-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="lg:basis-[56%] basis-full lg:order-2 order-1">
        <h3 className="font-semibold text-base text-[#212EA0] uppercase">
          about university
        </h3>
        <h2 className="font-semibold text-[35px] text-black my-2.5 max-w-[400px] leading-[1.2] max-[800px]:text-[28px]">
          nurturing tomorrows leader today
        </h2>
        <p className="text-[#676767] mb-[15px]">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.{" "}
        </p>
        <p className="text-[#676767] mb-[15px]">
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className="text-[#676767] mb-[15px]">
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
