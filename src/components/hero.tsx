"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import CodeText from "./code-text";
import Header from "./header";
import { Twitter, Github, Linkedin } from 'lucide-react'

function SocialIcons() {
    return (
      <div className="flex space-x-4 mb-10 justify-center">
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-12 h-12" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="w-12 h-12" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-12 h-12" />
        </a>
      </div>
    )
  }

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
        <div className="flex flex-col max-h-screen">
          <Header />
          <div className="flex-grow mt-12 mb-1"> {/* Add top margin to account for fixed header */}
            <div className="flex flex-col md:flex-row h-full">
              {/* First column with Name and CodeText */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center order-2 md:order-1 md:pr-0">
                {/* Name div */}
                <div className="text-4xl md:text-6xl lg:text-6xl font-bold mb-8 ">
                  <span>
                    Hi, I'm Craig!
                  </span>
                </div>
                <div className="w-[90%] h-[500px] md:pr-0 mb-20">
                  <CodeText code={codeLines} maxHeight="500px" />
                </div>
              </div>
            
              {/* Second column with Avatar */}
              <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
                <div className="w-3/5 md:w-3/5 mt-10 md:mt-0">
                  <Avatar className="w-full h-auto">
                    <AvatarImage src="/craig-no-bg.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
          <footer>
          <SocialIcons />
        </footer>
        </div>
        
      );
  }