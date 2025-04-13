"use client";

import { Button } from "@/components/ui/button";
import { useData } from "@/lib/context";
import { cn } from "@/lib/utils";
import { BACKGROUND_OPTIONS, textColorDark } from "./background-snippet";
import { Check } from "lucide-react";

type BackgroundCardProps = {};

export const BackgroundPicker: React.FC<BackgroundCardProps> = () => {
  const { myLink, updateProfileInfo } = useData();

  const selectBackground = (code: string) => {
    updateProfileInfo("background", code);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {BACKGROUND_OPTIONS.map((background) => {
        const { code, name } = background;

        const isTextDark = textColorDark.includes(code);
        const isSelected = myLink.background === code;


        return (
          <Button
            key={code}
            variant="outline"
            style={{
              backgroundColor: code,
            }}
            className={cn(
              "relative min-h-[60px] min-w-[150px] overflow-hidden  text-background transition",
              {
                "text-black hover:text-inherit": isTextDark,
              }
            )}
            onClick={() => selectBackground(code)}
          >
            {name}
            {isSelected && (
              <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-white transition">
                <Check className="w-6 h-6" color="black" />
              </div>
            )}
          </Button>
        );
      })}
    </div>
  );
};
