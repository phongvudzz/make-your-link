"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { DataProps } from "@/types";

interface PhotoUploadProps {
  value: string;
  onChange: (e: { target: { name: keyof DataProps; value: string } }) => void;
}

export const PhotoUpload = ({ value, onChange }: PhotoUploadProps) => {
  if (value) {
    return (
      <div className="relative max-w-[150px] max-h-[150px] aspect-square rounded-lg">
        <Image fill src={value} alt="Upload" className="rounded-lg relative aspect-3/2 object-cover object-center" />
        <button
          onClick={() => onChange({ target: { name: "image", value: "" } })}
          type="button"
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      content={{
        label: "Drag and drop your image here",
      }}
      endpoint="serverImage"
      onClientUploadComplete={(res) => {
        onChange({
          target: {
            name: "image",
            value: res?.[0].url,
          },
        });
      }}
      onUploadError={(error: Error) => {
        console.log("error", error);
      }}
    />
  );
};
