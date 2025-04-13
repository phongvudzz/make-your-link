"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useData } from "@/lib/context";
import { DisplayScreen } from "./display-screen";
import { BACKGROUND_OPTIONS } from "../background/background-snippet";

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
        "absolute h-[680px] w-[355px] rounded-[36px] overflow-hidden",
        {
          "bg-white": !myLink.background,
        }
      )}
    >
      {isEmpty ? (
        <div className="bg-white w-full text-sm text-muted-foreground h-full flex justify-center items-center z-20 rounded-[32px]">
          Nothing to show...
        </div>
      ) : (
        <>
          {!isEmpty && selectedBackgroundComponent}
          <div className="h-full pt-10 px-2 ">
            <DisplayScreen myLink={myLink} />
          </div>
        </>
      )}
    </div>
  );
};
