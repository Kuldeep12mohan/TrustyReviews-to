"use client"
import { useMyContext } from "@/context"

const Loading=()=>{
  const {isDarkMode,setIsDarkMode} = useMyContext()
  return <div className={`flex justify-center h-screen items-center ${isDarkMode?"bg-slate-950 text-white":"text-black bg-white"} `}>
    loading...
  </div>
}
Loading.displayName = 'Loading'
export default Loading