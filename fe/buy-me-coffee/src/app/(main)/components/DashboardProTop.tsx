import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DashboardProTop = () => {
  return (
    <div className="border-[1.2px] border-[#E4E4E7] rounded-[8px]">
      {" "}
      <div className="flex flex-col gap-[16px] p-[24px]">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-[12px]">
            <Avatar className="w-[40px] h-[40px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-[14px] font-[500]">Name</p>
              <a className="text-[12px] font-[400]">URL.com</a>
            </div>
          </div>
          <div>
            <button className="bg-[#18181B] rounded-[6px] px-[16px] py-[8px] text-[14px] font-[500] text-white flex gap-[8px] items-center ">
              {" "}
              <Copy className="text-white size-[16px]" />
              Share page link
            </button>
          </div>
        </div>
        <div className="py-[16px]">
          <div className="w-full h-[1px] border-[1px] border-[#E4E4E7] "></div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex gap-[16px] items-center">
            <p className="text-[20px] font-[600]">Earnings</p>{" "}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last week</SelectItem>
                <SelectItem value="month">Last 30 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>{" "}
          </div>
          <p className="text-[36px] font-[700]">$450</p>
        </div>
      </div>
    </div>
  );
};
