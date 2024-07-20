"use client";
import React from "react";
import { FaPlus, FaTree } from "react-icons/fa";
import { useMyContext } from "@/context";
import { NavBar } from "@/components/NavBar";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { isDarkMode } = useMyContext();
  const router = useRouter();

  return (
    <div
      className={`py-2 ${
        isDarkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }`}
    >
      <NavBar />
      <div className="px-8">
        <h1 className="text-3xl font-semibold my-6">Overview</h1>
        <Card />
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-3xl font-bold">Spaces</h1>
          <button
            className="bg-[#5d5cff] text-white font-bold py-2 px-4 rounded-md flex items-center gap-2"
            onClick={() => {
              router.push("/createSpace");
            }}
          >
            <FaPlus />{" "}
            <span className="hidden md:block">Create a new space</span>
          </button>
        </div>
        <div className="flex justify-center my-10">
          <div className="text-center">
            <FaTree size={200} className="mx-auto" />
            <hr className="my-4" />
            <div
              className={`mt-10 ${isDarkMode ? "opacity-50" : "opacity-90"}`}
            >
              No space yet, add a new one?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
