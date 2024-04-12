import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white p-5 sticky top-0">
      <div className="max-w-[1240px] py-[18px] mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">FreshBooks</div>
        {toggle ? (
          <AiOutlineClose
            className="text-3xl text-black xl:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenu
            className="text-3xl text-black xl:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div className="w-[1000px] hidden xl:flex justify-between ">
          <ul className="flex gap-8 items-center text-[1rem]">
            <li>Features</li>
            <li>For Small Businesses</li>
            <li>For Accountants</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <ul className="flex gap-5 text-[.8rem]">
            <li>1-888-674-3175</li>
            <li>CONTACT US</li>
            <li>LOGIN</li>
            <li>Try It Free</li>
          </ul>
        </div>

        {/* Responsive Design */}
        <div
          className={` duration-300 bg-gray-200 xl:hidden fixed w-full h-screen text-black ${
            toggle ? "left-[0]" : "left-[100%]"
          } top-[92px] text-center`}
        >
          <ul className="flex flex-col text-2xl mt-10">
            <li className="p-5">Features</li>
            <li className="p-5">For Small Businesses</li>
            <li className="p-5">For Accountants</li>
            <li className="p-5">Resources</li>
            <li className="p-5">Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
