"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import CodeText from "./code-text";



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
    <div className="flex flex-col min-h-screen pb-20"> {/* Changed max-h-screen to min-h-screen and added pb-20 */}
      <div className="flex-grow mt-16 mb-1">
        <div className="flex flex-col lg:flex-row h-full">
          {/* First column with Name and CodeText */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center order-2 lg:order-1 lg:pr-4">
            {/* Name div */}
            <div className="text-4xl lg:text-6xl font-bold mb-4">
              <span>
                Hi, I'm Craig!
              </span>
            </div>
            <div className="w-[85%] h-[400px] mb-4 rounded-2xl shadow-md shadow-glow transition-shadow duration-300 overflow-auto"> {/* Added overflow-auto */}
              <CodeText code={codeLines} />
            </div>
          </div>
        
          {/* Second column with Avatar */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 lg:pl-4">
            <div className="w-3/5 lg:w-3/5 mt-10 lg:mt-0">
              <Avatar className="w-full h-auto shadow-xl dark:shadow-xl dark:shadow-glow transition-shadow duration-300 mb-6">
                <AvatarImage src="/craig-no-bg.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}