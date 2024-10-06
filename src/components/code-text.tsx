"use client"

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";

interface CodeTextProps {
  code: string[];
  animationSpeed?: number;
  maxHeight?: string;
}

export default function CodeText({ code, animationSpeed = 50, maxHeight = "400px",  }: CodeTextProps) {
  const [visibleText, setVisibleText] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (currentLineIndex >= code.length) return;

    const interval = setInterval(() => {
      if (currentCharIndex < code[currentLineIndex].length) {
        setVisibleText(prev => prev + code[currentLineIndex][currentCharIndex])
        setCurrentCharIndex(prev => prev + 1)
      } else {
        setVisibleText(prev => prev + "\n")
        setCurrentLineIndex(prev => prev + 1)
        setCurrentCharIndex(0)
      }
      
      // Scroll to bottom of pre element
      if (preRef.current) {
        preRef.current.scrollTop = preRef.current.scrollHeight;
      }
    }, animationSpeed)

    return () => clearInterval(interval)
  }, [code, animationSpeed, currentLineIndex, currentCharIndex])

  return (
    <Card className="w-full h-full bg-background text-foreground font-mono shadow-lg shadow-glow transition-shadow duration-300">
      <CardContent className="p-4 h-full flex flex-col">
        <div className="flex space-x-2 mb-4" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <pre 
          ref={preRef}
          className="code-block text-xs sm:text-xs md:text-xs whitespace-pre-wrap break-words" 
          role="region" 
          aria-label="Animated code block"
          style={{ maxHeight: maxHeight, height: maxHeight }}
        >
          {visibleText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              <span className="text-zinc-500 inline-block min-w-[2ch]">{(index + 1).toString().padStart(2, '0')} </span>
              <span className="inline">{line}</span>
              {index < visibleText.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
          <span className="inline-block w-2 h-4 bg-zinc-50 animate-pulse" aria-hidden="true" />
        </pre>
      </CardContent>
    </Card>
  );
}