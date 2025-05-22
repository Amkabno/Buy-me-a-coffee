import { Navigation } from "./components/Navigation";
export default function ProfileCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen">
      <div>
        <Navigation />
      </div>

      <div className="  flex w-full h-full py-[150px] px-[64px] justify-around ">
        <div className="flex gap-[80px]">
          <div className="flex flex-col gap-[4px] ">
            <a className="w-[234px] px-[16px] py-[8px] text-[14px] font-[500] rounded-[6px] hover:bg-[#F4F4F5]">
              Home
            </a>
            <a className="w-[234px] px-[16px] py-[8px] text-[14px] font-[500] rounded-[6px] hover:bg-[#F4F4F5]">
              Explore
            </a>
            <a className="w-[234px] px-[16px] py-[8px] text-[14px] font-[500] rounded-[6px] hover:bg-[#F4F4F5]">
              View page
            </a>
            <a className="w-[234px] px-[16px] py-[8px] text-[14px] font-[500] rounded-[6px] hover:bg-[#F4F4F5]">
              Account settings
            </a>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
