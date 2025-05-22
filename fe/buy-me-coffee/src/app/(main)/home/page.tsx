import React from "react";
import { DashboardProfile } from "../components/DashboardProfile";
import { DashboardProTop } from "../components/DashboardProTop";

function ResetPassPage() {
  return (
    <div className="flex h-full w-full bg-white  flex-col gap-[24px] ">
      <DashboardProTop />
      <DashboardProfile />
    </div>
  );
}
export default ResetPassPage;
