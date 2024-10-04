"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Header from "@/components/header"
import CodeText from "./code-text";

export default function Hero() {
    const codeLines = [
      "const greeting = 'Hello, I'm Craig';",
      "const role = 'Full Stack Developer';",
      "const skills = ['React', 'Node.js', 'TypeScript'];",
      "",
      "function introduce() {",
      "  console.log(greeting);",
      "  console.log(`I'm a ${role}`);",
      "  console.log('My skills include:');",
      "  skills.forEach(skill => console.log(`- ${skill}`));",
      "}",
      "",
      "introduce();"
    ];
  
    return (
        <div>
          <Header />
          <div className="flex flex-col md:flex-row h-screen">
            {/* First column with Name and CodeText */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center order-2 md:order-1 md:pr-0">
              {/* New div for the name */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center md:text-right md:w-[80%] md:pr-0">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-950 to-pink-600">
                  Craig Antocci
                </span>
              </div>
              <div className="w-[80%] h-[400px] md:pr-0">
                <CodeText code={codeLines} maxHeight="400px" />
              </div>
            </div>
          
            {/* Second column with Avatar */}
            <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
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