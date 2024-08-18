import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundPicker } from "./backround-picker";

export const BackgroundSettings = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl flex justify-between items-center">
          Background
        </CardTitle>
        <CardDescription>
          Customize your background theme from here.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <BackgroundPicker />
      </CardContent>
    </Card>
  );
};
