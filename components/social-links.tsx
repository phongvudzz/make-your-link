"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialInput } from "./social-input";
import { socialLinksProvider } from "@/data/constant";
import { useData } from "@/lib/context";

export const SocialLinks = () => {
  const { myLink, updateProfileInfo } = useData();
  const handleInfoChange = (event: any) => {
    const { name, value } = event.target;

    updateProfileInfo(name, value);
  };

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Social Links</CardTitle>
        <CardDescription>Enter your social media links here.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-4">
        {socialLinksProvider.map((socialLink) => {
          const { name, icon, id } = socialLink;
          return (
            <SocialInput
              key={id}
              id={name}
              name={id}
              icon={icon}
              placeholder={`${name}.com/phongvu`}
              value={myLink[id]}
              onChange={handleInfoChange}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};
