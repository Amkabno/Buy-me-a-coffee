import React from "react";
import { DashboardProfile } from "../components/DashboardProfile";
import { DashboardProTop } from "../components/DashboardProTop";
import { Nosupporteryet } from "../components/NoSupporter";

function ResetPassPage() {
  return (
    <div className="flex h-full w-full bg-white  flex-col gap-[24px] ">
      <DashboardProTop />
      <DashboardProfile />
      <Nosupporteryet />
    </div>
  );
}
export default ResetPassPage;
