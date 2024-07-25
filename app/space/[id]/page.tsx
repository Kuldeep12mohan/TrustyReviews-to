'use client';
import { NavBar } from "@/components/NavBar";
import { useMyContext } from "@/context";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaCaretDown,
  FaVideo,
  FaEnvelope,
  FaEdit,
  FaFacebookF,
  FaYoutube,
  FaStar,
  FaRegCreditCard,
  FaCogs,
} from "react-icons/fa";
import { space } from "@/app/dashboard/page";
import TestimonialCard from "@/components/TestimonialCard";

const Page = ({ params }: { params: { id: string } }) => {
  const [space, setSpace] = useState<space>();

  useEffect(() => {
    const fetchSpace = async () => {
      const res = await axios.get(`/api/spaces/get/single?id=${params.id}`);
      console.log(res);
      setSpace(res.data.space);
    };
    fetchSpace();
  }, []);

  const { isDarkMode } = useMyContext();

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-slate-950" : "bg-white"}`}>
      <NavBar />
      <div className="px-8 py-10">
        <div className="flex gap-3 items-center">
          <span
            className={`w-16 h-16 rounded-full flex-shrink-0 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-500"
            }`}
          >
            {space && (
              <img src={`${space.logo}`} className="w-16 h-16 rounded-full" />
            )}
          </span>
          <div>
            <div className="flex items-center gap-1">
              <span
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {space?.name}
              </span>
              <FaCaretDown
                className={isDarkMode ? "text-white" : "text-black"}
              />
            </div>
            <span
              className={`hover:cursor-pointer hover:underline ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Space public URL: {`http://testimonial.to/${space?.name}`}
            </span>
          </div>
        </div>
        <div className="py-4 px-2 grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="flex gap-4 items-center">
            <FaVideo
              size={24}
              className={isDarkMode ? "text-white" : "text-black"}
            />
            <div>
              <span className={isDarkMode ? "text-white" : "text-black"}>
                Video credits
              </span>
              <div className={isDarkMode ? "text-gray-400" : "text-gray-800"}>
                2
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaEnvelope
              size={24}
              className={isDarkMode ? "text-white" : "text-black"}
            />
            <div>
              <span className={isDarkMode ? "text-white" : "text-black"}>
                Text credits
              </span>
              <div className={isDarkMode ? "text-gray-400" : "text-gray-800"}>
                10
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="flex gap-4 items-center">
              <FaEdit
                size={24}
                className={isDarkMode ? "text-white" : "text-black"}
              />
              <span className={isDarkMode ? "text-white" : "text-black"}>
                Edit space
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 px-10">
          <div className="col-span-1">
            <span
              className={`opacity-90 py-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              INBOX
            </span>
            <ul className="flex flex-col gap-2 mt-2 mb-6">
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>All
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Video
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>Text
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-900"></span>
                Archived
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500"></span>Liked
              </li>
            </ul>
            <span
              className={`opacity-90 py-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              INTEGRATIONS
            </span>
            <ul className="flex flex-col gap-2 mt-2">
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <FaFacebookF size={16} className="text-[#5d5cff]" />
                Social media
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <FaYoutube size={16} className="text-red-500" />
                External videos
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <FaStar size={16} className="text-yellow-500" />
                Other reviews
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <FaRegCreditCard size={16} className="text-green-900" />
                Custom cards
              </li>
              <li
                className={`flex items-center gap-2 py-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <FaCogs size={16} className="text-red-500" />
                Automation
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                placeholder="Search by name, email, or testimonial"
                className={`w-full rounded-lg px-4 py-2 outline-none ${
                  isDarkMode
                    ? "bg-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-100 text-gray-800 placeholder-gray-500"
                }`}
              />
              <button
                className={`flex items-center gap-2 py-2 px-4 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                } transition`}
              >
                Options <FaCaretDown />
              </button>
            </div>
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
