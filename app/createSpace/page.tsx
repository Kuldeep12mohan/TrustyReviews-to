"use client";
import { NavBar } from "@/components/NavBar";
import { useMyContext } from "@/context";
import axios from "axios";
import React, { useRef, useEffect, useState, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

const Page: React.FC = () => {
  const { isDarkMode } = useMyContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [header, setHeader] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleSubmit = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.post("/api/spaces/create", {
        name,
        logo,
        header,
        customMessage,
        userId,
      });
      console.log(res);
      toast.success("Space created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Space creation failed");
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "gacqpnmt");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dbkmmin3x/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      console.log(data.secure_url);
      setLogo(data.secure_url);
      setDisabled(false);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-slate-950" : "bg-white"
      } transition-colors duration-300`}
    >
      <NavBar />
      <div className="min-h-screen flex items-center py-6 px-2">
        <div className="max-w-3xl mx-auto p-6 border-2 rounded-lg shadow-md">
          <h1
            className={`text-3xl font-semibold text-center mb-4 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Create a new Space
          </h1>
          <p
            className={`text-center mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            After the Space is created, it will generate a dedicated page for
            collecting testimonials.
          </p>

          <div className="mb-4">
            <label
              htmlFor="space-name"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Space name
            </label>
            <input
              type="text"
              id="space-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100 focus:ring-indigo-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-indigo-500"
              }`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="space-logo"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Space logo
            </label>
            <div className="flex items-center gap-4">
              <span
                className={`w-10 h-10 rounded-full flex-shrink-0 ${
                  isDarkMode ? "bg-gray-500" : "bg-gray-500"
                }`}
              >
                {logo && (
                  <img
                    src={logo}
                    alt="Space Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
              </span>
              <button
                onClick={handleButtonClick}
                className={`border font-semibold py-2 px-4 rounded-lg shadow-sm ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors w-24`}
              >
                Change
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="header-title"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Header title
            </label>
            <input
              type="text"
              id="header-title"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              placeholder="Would you like to give a shoutout for xyz?"
              className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100 focus:ring-indigo-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-indigo-500"
              }`}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="custom-message"
              className={`block text-sm font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Your custom message
            </label>
            <textarea
              id="custom-message"
              rows={5}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Write a warm message to your customers, and give them simple directions on how to make the best testimonials"
              className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-gray-100 focus:ring-indigo-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-indigo-500"
              }`}
            />
          </div>

          <button
            disabled={disabled}
            onClick={handleSubmit}
            className={`w-full font-semibold py-3 px-4 rounded-lg shadow-sm ${
              isDarkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            } transition-colors`}
          >
            Create new Space
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Page;
