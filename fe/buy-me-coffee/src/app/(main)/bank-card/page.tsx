"use client";
import React from "react";

function ResetPassPage() {
  return (
    <div className="flex flex-col w-[510px] h-object-fit gap-[24px]">
      <div className="flex flex-col ">
        <p className="text-[24px] font-[600]">How would you like to be paid?</p>
        <p className="text-[14px] font-[400] text-[#71717A]">
          Enter location and payment details
        </p>
      </div>
      <div>
        <p className="text-[14px] font-[500]">Select country</p>
        <input
          placeholder="Select"
          className="border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:border-[#18181B] focus:outline-none transition-colors "
        />
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[12px] ">
          <div className="flex flex-col gap-[8px] w-full ">
            <p className="text-[14px] font-[500]">First name</p>
            <input
              placeholder="Enter your first name here"
              className="border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:border-[#18181B] focus:outline-none transition-colors "
            />
          </div>
          <div className="flex flex-col gap-[8px] w-full ">
            <p className="text-[14px] font-[500]">Last name</p>
            <input
              placeholder="Enter your last name here"
              className="border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:border-[#18181B] focus:outline-none transition-colors "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="text-[14px] font-[500]">Enter card number</p>
        <input
          placeholder="XXXX-XXXX-XXXX-XXXX"
          className="border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full  focus:border-[#18181B] focus:outline-none transition-colors "
        />
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[16px] ">
          <div className="flex flex-col gap-[8px] w-full ">
            <p className="text-[14px] font-[500]">Expires</p>
            <input
              placeholder="Month"
              className="border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:border-[#18181B] focus:outline-none transition-colors "
            />
          </div>
          <div className="flex flex-col gap-[8px] w-full ">
            <p className="text-[14px] font-[500]">Year</p>
            <input
              placeholder="Year"
              className="border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:border-[#18181B] focus:outline-none transition-colors "
            />
          </div>
          <div className="flex flex-col gap-[8px] w-full ">
            <p className="text-[14px] font-[500]">CVC</p>
            <input
              placeholder="CVC"
              className="border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:border-[#18181B] focus:outline-none transition-colors "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className=" rounded-[6px] py-[8px] text-[14px] font-[500] text-white bg-[#18181B] w-[220px] px-[16px]">
          Continue
        </button>
      </div>
    </div>
  );
}
export default ResetPassPage;
