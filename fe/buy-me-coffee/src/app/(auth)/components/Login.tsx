import React from "react";

import { SignUpButton } from "./SignUpButton";

export const Login = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-[32px] right-[80px]">
        <SignUpButton />
      </div>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[407px] h-[256px] flex flex-col p-[24px] gap-[24px] ">
          <div className="flex flex-col ">
            <p className="text-[24px] font-[600] ">Welcome back</p>
          </div>{" "}
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] font-[500] ">Email</p>
            <input
              type="text"
              placeholder="Enter email here"
              className="w-full px-4 py-2 border-2 text-[14px] font-[400] rounded-[6px] text-gray-800 placeholder:text-gray-400 focus:border-[#18181B] focus:outline-none transition-colors duration-200"
            />{" "}
            <p className="text-[14px] font-[500] ">Password</p>
            <input
              type="password"
              placeholder="Enter password here"
              className="w-full px-4 py-2 border-2 text-[14px] font-[400] rounded-[6px] text-gray-800 placeholder:text-gray-400 focus:border-[#18181B] focus:outline-none transition-colors duration-200"
            />
          </div>
          <button className="w-full rounded-[6px] text-[14px] text-[#FAFAFA] bg-[#18181B] py-[9px] active:bg-[#d1d1d1] ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
