import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[200px] z-1">
      <div className="max-w-[1240px] my-[200px] mx-auto text-center font-bold">
        <div className="text-xl xl:text-4xl">Accounting Software Built</div>
        <h2 className="text-white xl:text-5xl md:text-[80px] p-[24px]">
          For Accountants and Businesses
        </h2>
        <div className="text-white md:text-[50px] text-[20px]">
          Uses includes:
          <ReactTyped
            className="pl-3"
            strings={[
              "Invoicing",
              "Accounting",
              "Payments",
              "Expenses",
              "Time Tracking",
              "Projects",
              "Reporting",
              "Mobile",
            ]}
            typeSpeed={100}
            backSpeed={110}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
