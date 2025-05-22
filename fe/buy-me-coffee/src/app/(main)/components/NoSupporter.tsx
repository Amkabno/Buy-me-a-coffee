import React from "react";
import { Heart } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Nosupporteryet = () => {
  return (
    <div>
      <Table wrapperClassName="border-[1.2px] border-[#E4E4E7] w-[907px] rounded-[8px] h-object-fit">
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex flex-col items-center justify-center ">
                <div className="bg-[#F4F4F5] w-[64px] h-[64px] rounded-full flex justify-center items-center">
                  <Heart />
                </div>
                <div className="flex flex-col gap-[4px] ">
                  <p className="text-[16px] font-[600]">
                    You don't have any supporters yet
                  </p>
                  <p className="text-[16px] font-[400]">
                    Share your page with your audience to get started.
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
