"use client";

import { ExtraLink } from "@/types";
import { Icon } from "@iconify/react";

type ExtraLinkItemProps = {
  extraLink: ExtraLink;
};

export const ExtraLinkItem = ({ extraLink }: ExtraLinkItemProps) => {
  const { icon, label, link } = extraLink;
  const url =
    link.startsWith("http") || link.startsWith("https")
      ? link
      : `https://${link}`;

  return (
    <li>
      {label && url && (
        <a href={url} target="_blank">
          <div className="flex items-center gap-2 rounded-xl hover:bg-slate-300 bg-slate-200 py-3 px-3 transition">
            {icon ? (
              <Icon icon={icon} className="h-5 w-5" />
            ) : (
              <Icon icon="ph:link-simple" className="h-5 w-5" />
            )}
            <p className="font-medium text-sm flex-1 truncate">{label}</p>
          </div>
        </a>
      )}
    </li>
  );
};
