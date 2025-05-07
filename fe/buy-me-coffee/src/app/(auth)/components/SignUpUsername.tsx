import React from "react";
import { LoginButton } from "./LoginButton";

export const SignUpUsername = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-[32px] right-[80px]">
        <LoginButton />
      </div>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[407px] h-[256px] flex flex-col p-[24px] gap-[24px] ">
          <div className="flex flex-col ">
            <p className="text-[24px] font-[600] ">Create Your Account</p>
            <p className="text-[14px] font-[400] text-[#71717A]">
              Choose a username for your page
            </p>
          </div>{" "}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] font-[500] ">Username</p>
            <input
              type="text"
              placeholder="Enter username here"
              className="w-full px-4 py-2 border-2 text-[14px] font-[400] rounded-[6px] text-gray-800 placeholder:text-gray-400 focus:border-[#18181B] focus:outline-none transition-colors duration-200"
            />
          </div>
          <button className="w-full rounded-[6px] text-[14px] text-[#FAFAFA] bg-[#18181B] py-[9px] active:bg-[#d1d1d1]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
