import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const DashboardProfile = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center justify-between">
        <p className="text-[16px] font-[600]">Recent transactions</p>
        <Select>
          <SelectTrigger className="w-[148px]">
            <SelectValue placeholder="Amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">$1</SelectItem>
            <SelectItem value="2">$2</SelectItem>
            <SelectItem value="5">$5</SelectItem>
            <SelectItem value="10">$10</SelectItem>
          </SelectContent>
        </Select>{" "}
      </div>
      <Table wrapperClassName="border-[1.2px] border-[#E4E4E7] w-[907px] rounded-[8px]">
        <TableBody>
          <TableRow>
            <TableCell>
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
                    <div className="text-[16px] font-[500]">+ 10$</div>
                    <div className="text-[12px] font-[400] text-[#71717A]">
                      10 hours ago
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] font-[400] w-full h-object-fit">
                    Thank you for being so awesome everyday! You always manage
                    to brighten up my day when I’m feeling down. Although $1
                    isn’t that much money it’s all I can contribute at the
                    moment. When I become successful I will be sure to buy you
                    more gifts and donations. Thank you again.
                  </p>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
