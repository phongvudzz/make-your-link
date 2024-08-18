"use client";

import { useData } from "@/lib/context";
import { PhotoUpload } from "./photo-upload";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { DataProps } from "@/types";

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export const PersonalInfo = () => {
  const { myLink, updateProfileInfo } = useData();

  const handleChangeInfo = (e: any) => {
    const { name, value } = e.target;

    updateProfileInfo(name as keyof DataProps, value);
  };

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Profile Information</CardTitle>
        <CardDescription>
          Enter your profile or title information here.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2 ">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Vu Phong Nguyen Dep Trai"
            value={myLink.name}
            onChange={handleChangeInfo}
          />
        </div>
        <div className="relative flex flex-col gap-2">
          <Label>Image Upload</Label>
          <PhotoUpload
            value={myLink?.image || ""}
            onChange={handleChangeInfo}
          />
        </div>
        <div className="grid gap-2 ">
          <Label htmlFor="description">About yourself</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="I am a software engineer..."
            value={myLink.description}
            onChange={handleChangeInfo}
          />
        </div>
      </CardContent>
    </Card>
  );
};
