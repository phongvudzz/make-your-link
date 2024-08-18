"use client";
import { useData } from "@/lib/context";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { DisplayScreen } from "../mobile/display-screen";
import { BACKGROUND_OPTIONS } from "../background/background-snippet";
import { useMemo } from "react";

export const PreviewButtonMobile = () => {
  const { myLink, isEmpty } = useData();

  const selectedBackgroundComponent = useMemo(() => {
    return BACKGROUND_OPTIONS.find(
      (option) => option.code === myLink.background
    )?.component;
  }, [myLink.background]);

  return (
    <div className="fixed inset-x-0 bottom-0 p-4 z-10 flex justify-center items-center backdrop-blur-sm ">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="rounded-full max-w-[350px] w-full tracking-wide overflow-y-auto">
            Preview page
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[75%] pb-4">
          {isEmpty ? (
            <div className="w-full text-sm text-muted-foreground h-[90%] flex justify-center items-center">
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
        </DrawerContent>
      </Drawer>
    </div>
  );
};
