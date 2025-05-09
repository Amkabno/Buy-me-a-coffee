export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white w-screen h-screen flex">
      <div className="bg-[#FBBF24] w-1/2 relative">
        <div className="absolute top-8 left-20 flex items-center gap-2">
          <img src={"coffee.svg"} alt="logo" width={20} height={20} />
          <p className="text-[16px] font-[700]">Buy Me Coffee</p>
        </div>

        <div className="flex justify-center items-center h-full flex-col gap-[40px]">
          <img src={"illustration.png"} width={240} height={240} />
          <div className="flex justify-center items-center flex-col gap-[12px]">
            <h1 className="text-[24px] font-[700]">Fund your creative work</h1>
            <p className="text-[16px] font-[400] w-[450px] text-center">
              Accept support. Start a membership. Setup a shop. It's easier than
              you think.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-1/2 ">{children}</div>
    </div>
  );
}
