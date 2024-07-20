"use client";
import { useMyContext } from "@/context";
import { useCallback,useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaSun, FaMoon } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
export const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useMyContext();
  const {isOpen,setIsOpen} = useMyContext();
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  }, [setIsDarkMode]);
  const handleSignIn = useCallback(async () => {
    setLoading(true);
    try {
      router.push("/signin");
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  }, [router]);
  return (
    <div
      className={`flex justify-between ${
        isDarkMode ? "text-white" : "text-black"
      } pt-2 relative md:px-10 px-5 `}
    >
      <div className="text-2xl font-bold">Testimonial</div>
      <div className="flex justify-between w-20">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            isDarkMode
              ? "bg-gray-800 text-yellow-300"
              : "bg-yellow-100 text-gray-800"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute top-12 left-0 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            } w-full p-4 z-10`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center space-y-4">
              <li className="hover:cursor-pointer">Customers</li>
              <li className="hover:cursor-pointer">Features</li>
              <li className="hover:cursor-pointer">Integrations</li>
              <li className="hover:cursor-pointer">Pricing</li>
              <li className="hover:cursor-pointer" onClick={handleSignIn}>
                {loading ? "Loading..." : "Sign In"}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
