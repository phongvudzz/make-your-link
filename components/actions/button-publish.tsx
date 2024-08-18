"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Check, Copy, Send, Share2 } from "lucide-react";
import { useData } from "@/lib/context";
import { encodeData } from "@/lib/utils";
import { Input } from "../ui/input";
import { toast } from "sonner";

const ButtonPublish = () => {
  const { myLink, isEmpty } = useData();
  const [copy, setCopy] = useState(false);

  const urlLink = useMemo(
    () => `${window.location.origin}/preview?data=${encodeData(myLink)}`,
    [myLink]
  );

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(urlLink);
    toast.success("Copied to clipboard!");
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }, [urlLink]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" onClick={() => {}}>
          <Send className="mr-2 h-4 w-4" />
          Publish
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            Share your page
          </DialogTitle>
          <DialogDescription className="text-left">
            You can share your page with others and make it accessible from
            anywhere.
          </DialogDescription>
        </DialogHeader>
        {!isEmpty ? (
          <>
            <Input value={urlLink} readOnly />
            <DialogFooter>
              <div className="flex gap-3 w-full justify-between items-center">
                <Button className="w-full" onClick={() => {}}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button className="w-full" onClick={handleCopy}>
                  {copy ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </DialogFooter>
          </>
        ) : (
          <DialogClose>
            <Button className="w-full">
              Can&#39;t publish with empty fields!
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ButtonPublish;
