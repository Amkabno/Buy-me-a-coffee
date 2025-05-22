"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUpload } from "../components/ImageUpload";

function ResetPassPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [socialUrl, setSocialUrl] = useState("");
  const [socialUrlError, setSocialUrlError] = useState(false);

  const [forceDefaultImage, setForceDefaultImage] = useState(false);

  const isValidSocialUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      const socialDomains = [
        "facebook.com",
        "twitter.com",
        "instagram.com",
        "linkedin.com",
        "tiktok.com",
        "youtube.com",
        "twitch.com",
      ];
      return (
        parsed.protocol === "https:" &&
        socialDomains.some(
          (domain) =>
            parsed.hostname === domain || parsed.hostname.endsWith(`.${domain}`)
        )
      );
    } catch {
      return false;
    }
  };

  const handleContinue = () => {
    let hasError = false;

    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    if (socialUrl.trim() && !isValidSocialUrl(socialUrl.trim())) {
      setSocialUrlError(true);
      hasError = true;
    } else {
      setSocialUrlError(false);
    }

    if (hasError) return;

    setForceDefaultImage((prev) => !prev);

    router.push("/bank-card");
  };

  return (
    <div className="flex flex-col w-[510px] gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-semibold">Complete your profile page</p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium">Add photo</p>
        <ImageUpload forceDefault={forceDefaultImage} />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-[2px] items-center">
            <p className="text-sm font-medium">Name</p>
            <p className="text-[18px] font-large text-[#e40033]">*</p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name here"
              className={`border rounded-md px-3 py-2 text-sm font-normal w-full focus:outline-none placeholder:text-gray-400 transition-all ${
                nameError
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#E4E4E7] focus:border-black focus:ring-black"
              }`}
            />
            {nameError && (
              <p className="text-red-500 text-xs mt-1">Name is required</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">About</p>
          <textarea
            placeholder="Write about yourself here"
            className="border border-[#E4E4E7] rounded-md px-3 py-2 text-sm font-normal w-full h-[131px] focus:border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 transition-all resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Social media URL</p>
          <div className="flex flex-col gap-[2px]">
            <input
              value={socialUrl}
              onChange={(e) => setSocialUrl(e.target.value)}
              placeholder="https://"
              className={`border rounded-md px-3 py-2 text-sm font-normal w-full focus:outline-none placeholder:text-gray-400 transition-all ${
                socialUrlError
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#E4E4E7] focus:border-black focus:ring-black"
              }`}
            />
            {socialUrlError && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a valid social media URL
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleContinue}
          className="rounded-md py-2 text-sm font-medium text-white bg-black w-[220px] px-4 hover:bg-[#333] transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ResetPassPage;
