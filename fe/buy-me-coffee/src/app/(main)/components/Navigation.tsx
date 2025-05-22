import React from "react";
import { Logout } from "./Logout";

export const Navigation = () => {
  return (
    <div className="w-full h-object-fit fixed">
      <nav className=" items-center flex justify-between px-[64px] py-[8px]">
        <div className="flex gap-[8px]">
          <img src="coffee.svg" className="size-[24px]" />{" "}
          <p className="text-[16px] font-[700] ">Buy Me Coffee</p>{" "}
        </div>
        <div>
          <Logout />
        </div>
      </nav>
    </div>
  );
};
