import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <div className="w-full h-object-fit fixed">
      <nav className=" items-center flex justify-between px-[64px] ">
        <div className="flex gap-[8px]">
          <img src="coffee.svg" className="size-[24px]" />{" "}
          <p className="text-[16px] font-[700] ">Buy Me Coffee</p>{" "}
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="px-[16px] py-[8px]">
                <div className="flex gap-[8px] items-center">
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <NavigationMenuTrigger className="text-[14px] font-[500]">
                    Jake
                  </NavigationMenuTrigger>
                </div>
                <NavigationMenuContent className="min-w-[160px] p-2">
                  <NavigationMenuLink className="w-full px-2 py-1 hover:bg-accent rounded-sm">
                    Log out
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
};
