import React from "react";
const msg_icon = "/assets/msg-icon.png";
const mail_icon = "/assets/mail-icon.png";
const phone_icon = "/assets/phone-icon.png";
const location_icon = "/assets/location-icon.png";
const white_arrow = "/assets/white-arrow.png";

const Contact = () => {
  return (
    <div
      className="my-20 mx-auto max-w-[90%] flex items-center justify-between lg:flex-row flex-col lg:space-x-10"
      id="contact"
    >
      <div className="lg:basis-[48%] w-full text-[#676767]">
        <h3 className="text-[#000f38] font-medium text-[25px] flex items-center mb-5">
          send as a message{" "}
          <img src={msg_icon} alt="" className="w-[35px] ml-2.5" />
        </h3>
        <p className="max-w-[450px] leading-[1.3]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vitae
          alias corporis sed ut deserunt laudantium eius ipsa fuga tempore error
          aut dolorem, iure accusantium, accusamus in esse explicabo aspernatur.
        </p>
        <ul className="list-none">
          <li className="flex items-center my-5">
            <img src={mail_icon} alt="" className="w-[25px] mr-2.5" />
            contact@gerat.com
          </li>
          <li className="flex items-center my-5">
            <img src={phone_icon} alt="" className="w-[25px] mr-2.5" />
            1234567890
          </li>
          <li className="md:flex items-center my-5">
            <img src={location_icon} alt="" className="w-[25px] mr-2.5" />
            mela stree,adhnakkurichi,sndurai,ariyalur - 621719
          </li>
        </ul>
      </div>
      <div className="lg:basis-[48%] w-full text-[#676767] mt-10 lg:mt-0">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="block w-full bg-[#EBECFE] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none"
          />
          <label>phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile number"
            required
            className="block w-full bg-[#EBECFE] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none"
          />
          <label>Write Your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="enter your message"
            required
            className="block w-full bg-[#EBECFE] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none"
          ></textarea>
          <button
            type="submit"
            className="btn bg-[#212EA0] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a2480] transition-all shadow-md inline-flex items-center"
          >
            Send Message Now{" "}
            <img src={white_arrow} alt="" className="ml-[10px] w-5" />
          </button>
        </form>
        <span className="block my-5"></span>
      </div>
    </div>
  );
};

export default Contact;
