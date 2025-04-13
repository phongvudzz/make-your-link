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

  const handleChangeInfo = (event: InputChangeEvent) => {
    const { name, value } = event.target;

    updateProfileInfo(name as keyof DataProps, value);
  };

  const handleChangeImage = (event: {target: {name: keyof DataProps, value: string}}) => {
    const { name, value } = event.target;
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
            placeholder="phongvudzz"
            value={myLink.name}
            onChange={handleChangeInfo}
          />
        </div>
        <div className="relative flex flex-col gap-2">
          <Label>Image Upload</Label>
          <PhotoUpload
            value={myLink?.image || ""}
            onChange={handleChangeImage}
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
            className="max-h-[400px]"
          />
        </div>
      </CardContent>
    </Card>
  );
};
