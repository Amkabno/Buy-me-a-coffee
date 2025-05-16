"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Camera } from "lucide-react";

const DEFAULT_IMAGE_URL = "defaultImage.jpg";

interface ImageUploadProps {
  forceDefault?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ forceDefault }) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (forceDefault && !selectedFile) {
      setPreview(DEFAULT_IMAGE_URL);
    }
  }, [forceDefault, selectedFile]);

  useEffect(() => {
    if (!selectedFile) return;

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <label
        htmlFor="fileInput"
        className="relative flex items-center justify-center rounded-full w-[160px] h-[160px] border-[2px] border-dashed border-[#E4E4E7] cursor-pointer overflow-hidden bg-white"
      >
        <input
          type="file"
          id="fileInput"
          onChange={onSelectFile}
          className="hidden"
          accept="image/*"
        />
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <Camera className="size-[28px] stroke-[1.5px] text-gray-400 block m-auto" />
        )}
      </label>
    </div>
  );
};
