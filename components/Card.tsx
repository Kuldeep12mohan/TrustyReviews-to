"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaVideo, FaRegSmile } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { useMyContext } from "@/context";

export default function Card() {
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
          <CardItem className="text-xl font-bold flex items-center gap-4">
            <FaVideo size={24} />
            <div>
              <p>Videos</p>
              <strong className="text-2xl">0</strong>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full mx-auto p-2">
        <CardBody
          className={`relative group/card w-full h-auto rounded-xl p-6 border grid gap-4 ${
            isDarkMode
              ? "bg-black border-white/[0.2] text-white dark:hover:shadow-emerald-500/[0.1]"
              : "bg-gray-50 border-black/[0.1] text-neutral-600"
          }`}
        >
          <CardItem className="text-xl font-bold flex items-center gap-4">
            <FaRegSmile size={24} />
            <div>
              <p>Video Credits</p>
              <strong className="text-2xl">2</strong>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full mx-auto p-2">
        <CardBody
          className={`relative group/card w-full h-auto rounded-xl p-6 border grid gap-4 ${
            isDarkMode
              ? "bg-black border-white/[0.2] text-white dark:hover:shadow-emerald-500/[0.1]"
              : "bg-gray-50 border-black/[0.1] text-neutral-600"
          }`}
        >
          <CardItem className="text-xl font-bold flex items-center gap-4">
            <BsBriefcaseFill size={28} />
            <div className="flex-1">
              <p>Plan</p>
              <div className="flex gap-3">
                <strong className="text-2xl block mb-2">Free Plan</strong>
                <button className="bg-purple-200 text-purple-900 font-semibold md:py-2 md:px-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300 text-sm md:text-xl py-1 px-2">
                  Upgrade
                </button>
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
