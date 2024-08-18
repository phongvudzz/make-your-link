import { DataProps, SocialLinkList } from "@/types";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageIcon } from "lucide-react";
import { Icon } from "@iconify/react";
import { iconMap } from "@/data/constant";
import { ExtraLinkItem } from "../extra-link/extra-link-item";

type DisplayScreenProps = {
  myLink: DataProps;
};

export const DisplayScreen = ({ myLink }: DisplayScreenProps) => {
  const isEmptySocials =
    !myLink.facebook &&
    !myLink.twitter &&
    !myLink.instagram &&
    !myLink.github &&
    !myLink.telegram &&
    !myLink.linkedin &&
    !myLink.email &&
    !myLink.whatsapp &&
    !myLink.youtube;

  const renderSocialLinks = (
    <div className="flex items-center justify-center flex-wrap">
      {Object.entries(myLink).map(([key, value]) => {
        const excludedKeys = ["i", "n", "a", "bg"];
        if (key === "extraLinks" || !value || excludedKeys.includes(key)) {
          return null;
        }

        const propIcon = iconMap[key as SocialLinkList];

        if (key === "email")
          return (
            <span className="p-1" key={key}>
              <a href={`mailto:${value}`}>
                <Icon icon={propIcon} className="h-6 w-6" />
              </a>
            </span>
          );

        if (key === "wh" && !value) {
          const whatsappValue = value.startsWith("https://wa.me/")
            ? value
            : `https://wa.me/${value}`;

          return (
            <span className="p-1" key={key}>
              <a href={whatsappValue} target="_blank" rel="noopener noreferrer">
                <Icon icon={propIcon} className="h-6 w-6" />
              </a>
            </span>
          );
        }

        return (
          <span className="p-1" key={key}>
            <a href={value as string} target="_blank" rel="noopener noreferrer">
              <Icon icon={propIcon} className="h-6 w-6" />
            </a>
          </span>
        );
      })}
    </div>
  );

  return (
    <>
      <div className="p-[.5rem] h-full relative w-full space-y-8 max-w-lg mx-auto overflow-y-scroll hide_scrollbar">
        <div className="text-center z-50">
          <Avatar className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
            <AvatarImage
              src={myLink.image}
              alt={`PIC`}
              className="h-full w-full object-cover"
            />
            <AvatarFallback>
              <ImageIcon className="h-8 w-8 text-gray-300" />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold mt-4 text-slate-800">
            {myLink.name}
          </h1>
          <p className="text-sm mt-2 text-slate-600">{myLink.description}</p>
        </div>
        {!isEmptySocials && renderSocialLinks}
        <ul className="space-y-2">
          {myLink.extraLinks &&
            myLink.extraLinks.map((extraLink) => (
              <ExtraLinkItem key={extraLink.id} extraLink={extraLink} />
            ))}
        </ul>
      </div>
    </>
  );
};
