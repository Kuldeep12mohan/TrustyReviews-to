"use client";
import { useMyContext } from "@/context";
import React, { useState } from "react";
import { NavBar } from "./NavBar";
const Form = ({ id }: { id: string }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const { isDarkMode } = useMyContext();

  const containerClass = isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black";
  const inputClass = isDarkMode
    ? "w-full p-2 mb-4 border border-gray-700 rounded bg-gray-700 text-white"
    : "w-full p-2 mb-4 border border-gray-300 rounded";

  return (
    <div className={`min-h-screen ${containerClass}`}>
      <NavBar/>
      <div className="font-sans p-4">
        <div className={`max-w-xl mx-auto p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
          <h2 className="text-2xl font-bold mb-4">Submit Your Testimonial</h2>
          <div>
            <label className="block mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className={inputClass}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className={inputClass}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className={inputClass}
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="image">
              Image URL (optional):
            </label>
            <input
              className={inputClass}
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              type="submit"
              onClick={() => {}}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
