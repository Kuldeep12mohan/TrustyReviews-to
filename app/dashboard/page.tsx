"use client";
import React, { useEffect, useState } from "react";
import { FaPlus, FaTree } from "react-icons/fa";
import { useMyContext } from "@/context";
import { NavBar } from "@/components/NavBar";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import SpaceCard from "@/components/SpaceCard";
import axios from "axios";
export interface space {
  id: string;
  userId: string;
  name: string;
  logo: string;
  customMessage: string;
  header: string;
}
const Dashboard = () => {
  const { isDarkMode } = useMyContext();
  const router = useRouter();
  const [spaces, setSpaces] = useState<space[]>([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const res = await axios.get(
          `/api/spaces/get/bulk?userId=${localStorage.getItem("userId")}`
        );
        setSpaces(res.data.spaces);
      } catch (error) {
        console.error("Error fetching spaces:", error);
      }
    };
    fetchSpaces();
  }, []);

  return (
    <div
      className={`min-h-screen ${
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
        <div>
          {spaces.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 py-4">
              {spaces.map((space, index) => (
                  <SpaceCard
                    key={index}
                    id={space.id}
                    name={space.name}
                    logo={space.logo}
                    header={space.header}
                    customMessage={space.customMessage}
                  />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <FaTree size={200} className="mx-auto" />
              <hr className="my-4" />
              <div
                className={`mt-10 ${isDarkMode ? "opacity-50" : "opacity-90"}`}
              >
                No space yet, add a new one?
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
