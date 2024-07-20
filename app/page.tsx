"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context";
import { NavBar } from "@/components/NavBar";

const Page = () => {
  const { isDarkMode } = useMyContext();
  const router = useRouter();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-slate-950" : "bg-white"
      } transition-colors duration-300`}
    >
      <NavBar />
      <div
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } mt-4 py-20 px-5 md:px-2`}
      >
        <h1 className=" md:text-6xl text-3xl font-bold text-center">
          Get Testimonials from your <br /> customers with ease
        </h1>
        <p
          className={`text-center py-3 md:text-2xl text-1xl ${
            isDarkMode ? "opacity-30" : "opacity-90"
          }`}
        >
          Collecting testimonials is hard, we get it. So we built Testimonial,
          in minutes, you can collect text and video <br /> testimonials from
          your customers with no need for a developer or website hosting
        </p>
        <div className="flex justify-center gap-3 py-2 ">
          <button
            className="bg-[#5d5cff] text-white py-3 px-9 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            onClick={() => router.push("/signup")}
          >
            Try FREE now
          </button>
          <button className="border-2 border-blue-700 py-3 px-9 rounded-lg">
            Talk to us
          </button>
        </div>
        <div
          className={`text-center text-sm ${
            isDarkMode ? "opacity-30" : "opacity-90"
          }`}
        >
          Get started with free credits on us.{" "}
          <span className="underline cursor-pointer">See our pricing</span>
        </div>
      </div>
      <div
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } mt-4 py-20 px-5 md:px-2`}
      >
        <h1 className="text-center md:text-6xl text-3xl font-bold">
         Add testimonials to your website <br /> with no coding!
        </h1>
        <p
          className={`text-center py-3 md:text-2xl text-1xl ${
            isDarkMode ? "opacity-30" : "opacity-90"
          }`}
        >
          Copy and paste our HTML code to add the Wall Of Love to your website. We <br /> Support any no-code platform(webflow,wordpress,you nameit!) 
        </p>
      </div>
    </div>
  );
};

export default Page;
