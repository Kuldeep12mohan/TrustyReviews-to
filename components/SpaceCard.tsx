"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useMyContext } from "@/context";
import { useRouter } from "next/navigation";

interface SpaceCardProps {
  id:string;
  name: string;
  header: string;
  logo: string;
  customMessage: string;
}

export default function SpaceCard({
  id,
  name,
  header,
  logo,
  customMessage,
}: SpaceCardProps) {
  const { isDarkMode } = useMyContext();
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 hover:cursor-pointer" onClick={()=>
    {
      router.push(`/space/${id}`)
    }
    }>
      <CardContainer className="inter-var w-full mx-auto p-2">
        <CardBody
          className={`relative group/card w-full h-auto rounded-xl p-6 border grid gap-4 ${
            isDarkMode
              ? "bg-black border-white/[0.2] text-white dark:hover:shadow-emerald-500/[0.1]"
              : "bg-gray-50 border-black/[0.1] text-neutral-600"
          }`}
        >
          <CardItem className="flex items-center gap-4 px-10">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-10 w-10 rounded-full"
            />
            <div
              className={`text-xl font-bold ${
                isDarkMode
                  ? "text-red-400 hover:text-red-600"
                  : "text-green-600 hover:text-green-800"
              }`}
            >
              {header}
            </div>
          </CardItem>
          <CardItem
            className={`text-lg font-semibold px-10 ${
              isDarkMode
                ? "text-blue-400 hover:text-blue-600"
                : "text-purple-600 hover:text-purple-800"
            }`}
          >
            {name}
          </CardItem>
          <CardItem
            className={`text-base px-10 ${
              isDarkMode
                ? "text-yellow-400 hover:text-yellow-600"
                : "text-orange-600 hover:text-orange-800"
            }`}
          >
            {customMessage}
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
