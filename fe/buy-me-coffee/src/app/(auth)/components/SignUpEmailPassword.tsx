"use client";
import React from "react";
import { LoginButton } from "./LoginButton";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CircleX } from "lucide-react";

export const SignUpEmailPassword = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [availabilityEmail, setAvailabilityEmail] = useState<
      null | "unvalid"
    >(null);
    const [availabilityPassword, setAvailabilityPassword] = useState<
    null  | "uncorrect"
  >(null);
  const [Checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      setPassword(value);}
  
      if (Checked && value.trim() !== "") {
        if () {
          setAvailabilityEmail("unvalid");
        } else {
          setAvailabilityEmail(null);
        }
    };
  
    const handleContinue = () => {
      setChecked(true);
      if (email.trim() === "") {
        setAvailabilityEmail(null);
        return;
      }}
      const handleContinue = () => {
        setChecked(true);
        if (password.trim() === "") {
          setAvailabilityPassword(null);
          return;
        }}
  
    
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-[32px] right-[80px]">
        <LoginButton />
      </div>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-[407px] h-[256px] flex flex-col p-[24px] gap-[24px] ">
          <div className="flex flex-col ">
            <p className="text-[24px] font-[600] ">Welcome, {username}</p>
            <p className="text-[14px] font-[400] text-[#71717A]">
              Connect email and set a password
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] font-[500] ">Email</p>
            <input
              type="text"
              placeholder="Enter email here"
              className="w-full px-4 py-2 border-2 text-[14px] font-[400] rounded-[6px] text-gray-800 placeholder:text-gray-400 focus:border-[#18181B] focus:outline-none transition-colors duration-200"
            />{" "}
           
            {availabilityEmail === "unvalid" && Checked && (
              <div className="flex items-center gap-[4px]">
                <CircleX className="text-red-600 size-[12px] stroke-[1.5px]" />
                <p className="text-red-600 text-[12px] font-[400]">
                  Please enter a valid email
                </p>
              </div>
            )}
            <p className="text-[14px] font-[500] ">Password</p>
            <input
              type="password"
              placeholder="Enter password here"
              className="w-full px-4 py-2 border-2 text-[14px] font-[400] rounded-[6px] text-gray-800 placeholder:text-gray-400 focus:border-[#18181B] focus:outline-none transition-colors duration-200"
            />
           
            {availabilityPassword === "uncorrect" && Checked && (
              <div className="flex items-center gap-[4px]">
                <CircleX className="text-red-600 size-[12px] stroke-[1.5px]" />
                <p className="text-red-600 text-[12px] font-[400]">
                Use at least 8 characters, including a number and a symbol
                </p>
              </div>
            )}
          </div>
          <button
            onClick={handleContinue}
            className="w-full rounded-[6px] text-[14px] text-[#FAFAFA] bg-[#18181B] py-[9px] active:bg-[#d1d1d1]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}; 
