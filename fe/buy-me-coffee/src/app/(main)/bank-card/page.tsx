"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getData } from "country-list";

interface Country {
  code: string;
  name: string;
}

interface FormData {
  country: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}

function ResetPassPage() {
  const countries: Country[] = getData();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (country: Country, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCountry(country);
    setValue("country", country.code, { shouldValidate: true });
    setOpen(false);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[510px] h-auto gap-[24px]"
    >
      <div className="flex flex-col">
        <p className="text-[24px] font-[600]">How would you like to be paid?</p>
        <p className="text-[14px] font-[400] text-[#71717A]">
          Enter location and payment details
        </p>
      </div>

      <div className="flex flex-col gap-[12px]" ref={ref}>
        <div className="flex gap-[3px] items-center leading-none">
          <p className="text-[14px] font-[500]">Select country</p>
          <p className="text-[18px] font-large text-[#e40033]">*</p>
        </div>

        <input type="hidden" {...register("country", { required: true })} />

        <div
          className={`relative cursor-pointer`}
          onClick={() => setOpen((prev) => !prev)}
          tabIndex={0}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls="country-listbox"
        >
          <div
            className={`border-[1.1px] ${
              errors.country ? "border-red-500" : "border-[#E4E4E7]"
            } rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full bg-white flex justify-between items-center focus:outline-none`}
          >
            <span
              className={`${selectedCountry ? "text-black" : "text-[#71717A]"}`}
            >
              {selectedCountry ? selectedCountry.name : "Select a country"}
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          {open && (
            <ul
              id="country-listbox"
              className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg"
              role="listbox"
            >
              {countries.map((country) => (
                <li
                  key={country.code}
                  role="option"
                  aria-selected={selectedCountry?.code === country.code}
                  className={`cursor-pointer px-4 py-2 text-sm ${
                    selectedCountry?.code === country.code
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={(e) => handleCountrySelect(country, e)}
                >
                  {country.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[12px]">
          {(["firstName", "lastName"] as (keyof FormData)[]).map((field) => (
            <div key={field} className="flex flex-col gap-[8px] w-full">
              <div className="flex gap-[3px] items-center leading-none">
                <p className="text-[14px] font-[500]">
                  {field === "firstName" ? "First name" : "Last name"}
                </p>
                <p className="text-[18px] font-large text-[#e40033]">*</p>
              </div>
              <div className="flex flex-col gap-[3px]">
                <input
                  placeholder={
                    field === "firstName"
                      ? "Enter your first name here"
                      : "Enter your last name here"
                  }
                  {...register(field, {
                    required: `${
                      field === "firstName" ? "First name" : "Last name"
                    } is required`,
                  })}
                  className={`border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:outline-none transition-colors ${
                    errors[field] ? "border-red-500" : "focus:border-[#18181B]"
                  }`}
                />
                {errors[field] && (
                  <span className="text-red-500 text-xs mt-[2px]">
                    {errors[field]?.message as string}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-[3px] items-center leading-none">
          <p className="text-[14px] font-[500]">Enter card number</p>
          <p className="text-[18px] font-large text-[#e40033]">*</p>
        </div>
        <div className="flex flex-col gap-[3px]">
          <input
            placeholder="XXXX-XXXX-XXXX-XXXX"
            {...register("cardNumber", {
              required: "Invalid card number or empty",
            })}
            className={`border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:outline-none transition-colors ${
              errors.cardNumber ? "border-red-500" : "focus:border-[#18181B]"
            }`}
          />
          {errors.cardNumber && (
            <span className="text-red-500 text-xs mt-[2px]">
              {errors.cardNumber.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[16px]">
          {(["expiryMonth", "expiryYear", "cvc"] as (keyof FormData)[]).map(
            (field) => (
              <div key={field} className="flex flex-col gap-[8px] w-full">
                <div className="flex gap-[3px] items-center leading-none">
                  <p className="text-[14px] font-[500]">
                    {field === "expiryMonth"
                      ? "Expires"
                      : field === "expiryYear"
                      ? "Year"
                      : "CVC"}
                  </p>
                  <p className="text-[18px] font-large text-[#e40033]">*</p>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <input
                    placeholder={
                      field === "expiryMonth"
                        ? "Month"
                        : field === "expiryYear"
                        ? "Year"
                        : "CVC"
                    }
                    {...register(field, {
                      required: `${
                        field === "expiryMonth"
                          ? "Expiry month"
                          : field === "expiryYear"
                          ? "Expiry year"
                          : "CVC"
                      } is required`,
                    })}
                    className={`border-[1.1px] border-[#E4E4E7] rounded-[6px] px-[12px] py-[8px] text-[14px] font-[400] w-full focus:outline-none transition-colors ${
                      errors[field]
                        ? "border-red-500"
                        : "focus:border-[#18181B]"
                    }`}
                  />
                  {errors[field] && (
                    <span className="text-red-500 text-xs mt-[2px]">
                      {errors[field]?.message as string}
                    </span>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-[6px] py-[8px] text-[14px] font-[500] text-white bg-[#18181B] w-[220px] px-[16px]"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

export default ResetPassPage;
