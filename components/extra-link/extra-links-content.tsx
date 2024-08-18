"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { Button } from "../ui/button";
import { ExtraLink } from "@/types";
import { useData } from "@/lib/context";
import { v4 as uuidv4 } from "uuid";
import { SortableLink } from "./extra-link-sortable";

export const ExtraLinksContent = () => {
  const scrollDownRef = useRef<HTMLDivElement | null>(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const { myLink, addNewExtraLink, updateExtraLinks } = useData();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addLinkDetailForm = () => {
    const newExtraLink: ExtraLink = {
      id: uuidv4(),
      icon: "",
      label: "",
      link: "",
    };
    addNewExtraLink(newExtraLink);
    setShouldScroll(true);
  };

  useEffect(() => {
    if (shouldScroll && scrollDownRef.current) {
      scrollDownRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      setShouldScroll(false);
    }
  }, [shouldScroll]);

  const data = useMemo(() => myLink?.extraLinks || [], [myLink.extraLinks]);

  const onDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (over && active.id !== over?.id) {
        const activeIndex = data.findIndex(({ id }) => id === active.id);
        const overIndex = data.findIndex(({ id }) => id === over.id);
        const newExtraLinks = arrayMove(data, activeIndex, overIndex);

        updateExtraLinks(newExtraLinks);
      }
    },
    [data, updateExtraLinks]
  );

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={data.map((link) => link.id)}
          strategy={verticalListSortingStrategy}
        >
          {data.map((extraLink) => (
            <SortableLink key={extraLink.id} extraLink={extraLink} />
          ))}
        </SortableContext>
      </DndContext>
      <Button variant={"outline"} onClick={addLinkDetailForm}>
        +
      </Button>
      <div ref={scrollDownRef} />
    </>
  );
};
