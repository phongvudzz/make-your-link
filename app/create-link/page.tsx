"use client";
import { PreviewButtonMobile } from "@/components/actions/preview-button-mobile";
import { HomeEditor } from "@/components/home-editor";
import React from "react";

const CreateLinkPage = () => {
  return (
    <div className="h-screen w-full">
      <HomeEditor />
      <div className="lg:hidden">
        <PreviewButtonMobile />
      </div>
    </div>
  );
};

export default CreateLinkPage;
