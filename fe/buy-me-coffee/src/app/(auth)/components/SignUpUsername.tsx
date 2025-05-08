"use client";
import React, { useState } from "react";
import { LoginButton } from "./LoginButton";
import { CircleCheck, CircleX } from "lucide-react";
import { useRouter } from "next/navigation";

export const SignUpUsername = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [availability, setAvailability] = useState<
    null | "available" | "taken"
  >(null);
  const [Checked, setChecked] = useState(false);

  const takenUsernames = ["zoloo", "bataa", "amaraa"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);

    if (Checked && value.trim() !== "") {
      if (takenUsernames.includes(value.toLowerCase())) {
        setAvailability("taken");
      } else {
        setAvailability("available");
      }
    } else {
      setAvailability(null);
    }
  };

  const handleContinue = () => {
    setChecked(true);
    if (username.trim() === "") {
      setAvailability(null);
      return;
    }

    if (takenUsernames.includes(username.toLowerCase())) {
      setAvailability("taken");
    } else {
      setAvailability("available");

      router.push(`/sign-up-email?username=${encodeURIComponent(username)}`);
    }
  };

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-[32px] right-[80px]">
        <LoginButton />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[407px] h-auto flex flex-col p-[24px] gap-[24px]">
          <div className="flex flex-col">
            <p className="text-[24px] font-[600]">Create Your Account</p>
            <p className="text-[14px] font-[400] text-[#71717A]">
              Choose a username for your page
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] font-[500]">Username</p>
            <input
              type="text"
              placeholder="Enter username here"
              value={username}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 text-[14px] font-[400] rounded-[6px] text-gray-800 placeholder:text-gray-400 focus:border-[#18181B] focus:outline-none transition-colors duration-200"
            />
            {availability === "available" && Checked && (
              <div className="flex items-center gap-[4px]">
                <CircleCheck className="text-green-600 size-[12px] stroke-[1.5px]" />
                <p className="text-green-600 text-[12px] font-[400]">
                  Username available
                </p>
              </div>
            )}
            {availability === "taken" && Checked && (
              <div className="flex items-center gap-[4px]">
                <CircleX className="text-red-600 size-[12px] stroke-[1.5px]" />
                <p className="text-red-600 text-[12px] font-[400]">
                  The username is already taken
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
