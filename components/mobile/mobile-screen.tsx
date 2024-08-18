"use client";

import { useData } from "@/lib/context";
import { cn } from "@/lib/utils";
import { BACKGROUND_OPTIONS } from "../background/background-snippet";
import { useMemo } from "react";
import { DisplayScreen } from "./display-screen";

export const MobileScreen = () => {
  const { myLink, isEmpty } = useData();

  const background = useMemo(() => myLink?.background, [myLink]);

  const selectedBackgroundComponent = useMemo(
    () =>
      myLink
        ? BACKGROUND_OPTIONS.find((option) => option.code === background)
            ?.component
        : null,
    [background, myLink]
  );

  return (
    <div
      className={cn(
        "absolute h-[675px] w-[350px] left-2 top-2 rounded-[28px] overflow-hidden",
        {
          "bg-white": !myLink.background,
        }
      )}
    >
      {isEmpty ? (
        <div className="bg-white w-full text-sm text-muted-foreground h-full flex justify-center items-center z-20">
          Nothing to show...
        </div>
      ) : (
        <>
          {!isEmpty && selectedBackgroundComponent}
          <div className="h-full pt-10 px-2">
            <DisplayScreen myLink={myLink} />
          </div>
        </>
      )}
    </div>
  );
};
