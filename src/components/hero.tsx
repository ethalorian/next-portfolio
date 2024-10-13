"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import CodeText from "./code-text";
import { TypeAnimation } from 'react-type-animation';


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
    <div className="flex flex-col">
      <div className="flex-grow mt-16">
        <div className="flex flex-col lg:flex-row h-full">
          {/* First column with Name and CodeText */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center order-2 lg:order-1 lg:pr-4">
            <div className="w-[85%] h-[400px] rounded-2xl shadow-md shadow-glow transition-shadow duration-300 overflow-auto">
              <CodeText code={codeLines} />
            </div>
          </div>
        
          {/* Second column with Avatar */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 lg:pl-4">
            <div className="w-3/5 lg:w-3/5 mt-10 lg:mt-0">
              <Avatar className="w-full h-auto mb-10 shadow-xl dark:shadow-xl dark:shadow-glow transition-shadow duration-300">
                <AvatarImage src="/craig-no-bg.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      {/* New typewriter effect div */}
      <div className="w-full py-4 mt-6">
        <h1 className="text-center text-5xl">
          I am {' '}
          <span className="inline-block w-[auto]">
            <TypeAnimation
              sequence={[
                'a relentless problem solver.',
                5000,
                'committed to growth.',
                5000,
                'a valued team member.',
                5000,
              ]}
              wrapper="span"
              speed={12}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </span>
        </h1>
      </div>
    </div>
  );
}