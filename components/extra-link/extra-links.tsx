import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { ExtraLinksContent } from "./extra-links-content";

export const ExtraLinks = () => {
  return (
    <>
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex justify-between items-center">
            Extra Links
          </CardTitle>
          <CardDescription>
            Enter your additional link details here.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ExtraLinksContent />
        </CardContent>
      </Card>
    </>
  );
};
