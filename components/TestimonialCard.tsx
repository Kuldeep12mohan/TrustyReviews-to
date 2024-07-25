"use client";
import { useMyContext } from "@/context";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const TestimonialCard = () => {
  const { isDarkMode } = useMyContext();
  const [heart,setHeart] = useState(false);
  const toggle = ()=>{
    setHeart(!heart);
  }

  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex justify-between mb-4">
        <button className="rounded-2xl bg-purple-300 text-blue-600 px-4 py-2 hover:bg-purple-400 transition font-bold">
          Text
        </button>
        <div></div>
        <FaHeart onClick={toggle} className={`${heart && 'text-red-500'} hover:cursor-pointer`} />
      </div>
      <div className="flex mb-4">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <p className="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente,
        iste hic unde repellat deleniti ipsam delectus, laborum impedit dolorem
        quisquam exercitationem esse quo incidunt quaerat non distinctio ullam
        voluptate! Eos veniam ratione minima perferendis voluptatum quasi ad
        error ipsa ut harum impedit odit quam optio similique adipisci nihil
        ipsam obcaecati dolorem dignissimos, quia consequuntur! Rem,
        necessitatibus doloribus. Aliquid, aspernatur!
      </p>
      <div className="flex justify-between">
        <div>
          <div className="font-bold">Name</div>
          <div>Harshit</div>
          <div className="font-bold mt-2">Submitted At</div>
          <div>Jul 5, 2024, 3:13:48 PM</div>
        </div>
        <div>
          <div className="font-bold">Email</div>
          <div>harshit@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
