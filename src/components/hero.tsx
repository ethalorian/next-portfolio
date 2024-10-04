"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Header from "@/components/header"

export default function Hero() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row h-screen">
        {/* First column */}
        <div className="w-full md:w-1/2">
          {/* Add content for the first column if needed */}
        </div>
        
        {/* Second column with Avatar */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-4/5 md:w-4/5 mt-10 md:mt-0">
            <Avatar className="w-full h-auto">
              <AvatarImage src="/craig-no-bg.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}