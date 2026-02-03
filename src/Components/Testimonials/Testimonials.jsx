import React, { useRef } from "react";
const next_icon = "/assets/next-icon.png";
const back_icon = "/assets/back-icon.png";
const user_1 = "/assets/user-1.png";
const user_2 = "/assets/user-2.png";
const user_3 = "/assets/user-3.png";
const user_4 = "/assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideforward = () => {
    // On mobile/tablet, one slide (100%) vs desktop two slides (50% each)
    const slideWidth = window.innerWidth <= 1024 ? 25 : 25; // Logic simplified by 4 items total
    if (tx > -75) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="my-20 mx-auto px-10 md:px-20 relative">
      {/* Navigation Buttons */}
      <img
        src={next_icon}
        alt="next"
        className="absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 p-3 w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#212EA0] cursor-pointer z-10 hover:bg-[#1a2480] transition-colors shadow-md"
        onClick={slideforward}
      />
      <img
        src={back_icon}
        alt="back"
        className="absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 p-3 w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#212EA0] cursor-pointer z-10 hover:bg-[#1a2480] transition-colors shadow-md"
        onClick={slidebackward}
      />

      <div className="overflow-hidden rounded-xl">
        <ul
          ref={slider}
          className="flex w-[400%] md:w-[200%] overflow-x-hidden transition-transform duration-500 ease-in-out list-none p-0"
        >
          {[user_1, user_2, user_3, user_4].map((user, index) => (
            <li key={index} className="w-1/4 md:w-1/2 p-2 md:p-5">
              <div className="h-full shadow-lg p-6 md:p-10 rounded-2xl bg-white border border-gray-100 text-[#676767] leading-relaxed transition-all hover:shadow-xl">
                <div className="flex items-center mb-6 text-[15px]">
                  <img
                    src={user}
                    alt={`user ${index + 1}`}
                    className="w-[50px] md:w-[65px] h-[50px] md:h-[65px] rounded-full mr-4 border-4 border-[#212EA0] object-cover"
                  />
                  <div>
                    <h3 className="text-[#212EA0] font-bold text-base md:text-lg leading-tight">
                      William Jackson {index + 1}
                    </h3>
                    <span className="text-gray-500 text-sm md:text-base">
                      Edusity, USA
                    </span>
                  </div>
                </div>
                <p className="text-sm md:text-base opacity-90">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores incidunt repudiandae commodi a minus omnis vitae esse
                  adipisci natus molestiae, itaque libero facilis inventore,
                  aperiam, corrupti quam quidem quod quis.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
