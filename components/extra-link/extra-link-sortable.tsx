"use client";

import { ExtraLink } from "@/types";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSortable } from "@dnd-kit/sortable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useData } from "@/lib/context";
import { iconsList } from "@/data/constant";
import { Icon } from "@iconify/react";
import { useCallback } from "react";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";

interface ExtraLinkProps {
  extraLink: ExtraLink;
}

export const SortableLink = ({ extraLink }: ExtraLinkProps) => {
  const { id, icon, label, link } = extraLink;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { myLink, updateExtraLinks } = useData();

  const onChangeExtraLink = useCallback(
    (field: keyof ExtraLink, value: string) => {
      const newLinks = [...(myLink.extraLinks || [])];

      const foundIndex = newLinks.findIndex((link) => link.id === id);
      if (foundIndex !== -1) {
        newLinks[foundIndex][field] = value;
      }

      updateExtraLinks(newLinks);
    },
    [id, myLink.extraLinks, updateExtraLinks]
  );

  const onDeleteExtraLink = useCallback(
    (id: string) => {
      const newLinks = [...(myLink.extraLinks || [])];
      const foundIndex = newLinks.findIndex((link) => link.id === id);
      if (foundIndex !== -1) {
        newLinks.splice(foundIndex, 1);
      }

      updateExtraLinks(newLinks);
    },
    [myLink.extraLinks, updateExtraLinks]
  );

  return (
    <div key={id} ref={setNodeRef} style={style}>
      <Card className="p-4 relative">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-2">
            <div className="grid gap-2">
              <Label htmlFor={`link-icon-${id}`}>Icon Key</Label>
              <Select
                onValueChange={(value: string) =>
                  onChangeExtraLink("icon", value)
                }
                name="icon"
                value={icon}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Icons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {iconsList.map((data, i) => (
                      <SelectItem
                        defaultChecked={data.value === icon}
                        className="flex p-2"
                        key={i}
                        value={data.value}
                      >
                        <div className="flex items-center gap-2">
                          <Icon icon={data.value} className="h-5 w-5" />
                          {data.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`link-name-${id}`}>Label</Label>
              <Input
                id={`link-name-${id}`}
                name="label"
                type="text"
                placeholder="My Portfolio"
                value={label}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  onChangeExtraLink("label", value);
                }}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`link-${id}`}>Destination URL</Label>
            <Input
              id={`link-${id}`}
              name="link"
              type="url"
              placeholder="https://example.com"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                onChangeExtraLink("link", value);
              }}
            />
          </div>
          <div className="flex w-full justify-end">
            <Button
              className="flex items-center gap-1"
              variant="destructive"
              onClick={() => onDeleteExtraLink(id)}
            >
              <Trash className="w-4 h-4" />
              Delete
            </Button>
          </div>
        </div>
        <button
          className="DragHandle absolute -top-2 right-5 bg-white"
          {...attributes}
          {...listeners}
        >
          <svg viewBox="0 0 20 20" width="15">
            <path
              d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"
              transform="rotate(-90,10,10)"
              fill="currentcolor"
            />
          </svg>
        </button>
      </Card>
    </div>
  );
};
