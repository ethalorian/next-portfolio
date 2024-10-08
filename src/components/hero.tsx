"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import CodeText from "./code-text";
import Header from "./header";
import Footer from "./footer";


export default function Hero() {
    

  const codeLines = [
    "class DeveloperProfile {",
    "  constructor() {",
    "    this.name = 'Craig Antocci';",
    "    this.alias = 'ethalorian';",
    "    this.roles = [",
    "    'Full Stack Developer',", 
    "    'Developer Relations',",
    "     ];",
    "    this.technicalSkills = [",
    "      'React', 'Node.js', 'Docker',", 
    "      'TypeScript', 'TailwindCSS',",
    "      'Express', 'Next.js', 'GraphQL',", 
    "      'Firebase', 'Supabase',",
    "    ];",
    "    this.softSkills = [",
    "      'Growth Mindset', 'Leadership',", 
    "      'Communication',",
    "      'Determination', 'Innovation',",
    "    ];",
    "  }",
    "}"
  ];
  
    return (
        <div className="flex flex-col max-h-screen">
          <Header />
          <div className="flex-grow mt-16 mb-1 "> {/* Add top margin to account for fixed header */}
            <div className="flex flex-col md:flex-row h-full">
              {/* First column with Name and CodeText */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center order-2 md:order-1 md:pr-0">
                {/* Name div */}
                <div className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 ">
                  <span>
                    Hi, I'm Craig!
                  </span>
                </div>
                <div className="w-[85%] h-[400px] md:pr-0 mb-4  rounded-2xl shadow-md shadow-glow transition-shadow duration-300 ">
                  <CodeText code={codeLines} />
                </div>
                
              </div>
            
              {/* Second column with Avatar */}
              <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
                <div className="w-3/5 md:w-3/5 mt-10 md:mt-0">
                  <Avatar className="w-full h-auto shadow-xl dark:shadow-xl dark:shadow-glow transition-shadow duration-300 mb-6">
                    <AvatarImage src="/craig-no-bg.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <Footer/>
        
        </footer>
        </div>
        
      );
  }