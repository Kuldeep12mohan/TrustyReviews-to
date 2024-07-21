"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useMyContext } from "@/context";

export default function SpaceCard({ content }: { content: any }) {
  const { isDarkMode } = useMyContext();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <CardContainer className="inter-var w-full mx-auto p-2">
        <CardBody
          className={`relative group/card w-full h-auto rounded-xl p-6 border grid gap-4 ${
            isDarkMode
              ? "bg-black border-white/[0.2] text-white dark:hover:shadow-emerald-500/[0.1]"
              : "bg-gray-50 border-black/[0.1] text-neutral-600"
          }`}
        >
          <CardItem className="text-xl font-bold flex items-center gap-4 px-10">
            <div>{content}</div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
