"use client";
import React from "react";
import { ImageUpload } from "../components/ImageUpload";

function ResetPassPage() {
  return (
    <div className="flex flex-col w-[510px] gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-semibold">Complete your profile page</p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium">Add photo</p>
        <ImageUpload />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Name</p>
          <input
            placeholder="Enter your name here"
            className="border border-[#E4E4E7] rounded-md px-3 py-2 text-sm font-normal w-full focus:border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 transition-all shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">About</p>
          <textarea
            placeholder="Write about yourself here"
            className="border border-[#E4E4E7] rounded-md px-3 py-2 text-sm font-normal w-full h-[131px] focus:border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 transition-all shadow-sm resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Social media URL</p>
          <input
            placeholder="https://"
            className="border border-[#E4E4E7] rounded-md px-3 py-2 text-sm font-normal w-full focus:border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded-md py-2 text-sm font-medium text-white bg-black w-[220px] px-4 hover:bg-[#333] transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
}

export default ResetPassPage;
