"use client";

import { Play } from "lucide-react";
import { useData } from "@/lib/context";
import { Button } from "@/components/ui/button";

export const ButtonDemo = () => {
  const { showDemoData } = useData();

  return (
    <Button className="w-full" onClick={showDemoData}>
      <Play className="mr-2 h-4 w-4" />
      Demo
    </Button>
  );
};
