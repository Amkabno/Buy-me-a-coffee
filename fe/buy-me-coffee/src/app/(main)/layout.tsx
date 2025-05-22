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

      <div className=" items-center justify-center flex w-full h-full">
        {children}
      </div>
    </div>
  );
}
