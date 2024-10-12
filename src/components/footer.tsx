"use client";

import ThemeSwitcher from "./theme-switcher";
import { Twitter, Github, Linkedin } from 'lucide-react'


function SocialIcons() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="mt-4"> 
      <div className="flex space-x-8 mb-6 justify-center">
        <a href="https://twitter.com/ethalorian" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-12 h-12" />
        </a>
        <a href="https://github.com/ethalorian" target="_blank" rel="noopener noreferrer">
          <Github className="w-12 h-12" />
        </a>
        <a href="https://www.linkedin.com/in/craig-antocci-95140919/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-12 h-12" />
        </a>
       
      </div>
       <p className="text-center mt-2 text-base text-gray-600">
       &copy; {currentYear} ethalorian. All rights reserved. <ThemeSwitcher/>
     </p>
     </div> 
    )
  }

  export default function Footer() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-black py-4">
        <SocialIcons />
      </footer>
    );
  }