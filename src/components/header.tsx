"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Layers3, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems = [
    { label: "</Home>", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-10 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add your search functionality here if needed */}
          </div>
          <nav className="flex items-center">
            {isMobile ? (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="h-7 w-7 mt-10" /> : <Layers3 className="h-7 w-7 mt-10" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            ) : null}
            <Button variant="ghost" size="icon" className="ml-2">
              {/* Add your user icon or profile button here */}
            </Button>
          </nav>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-10 z-50 bg-background md:hidden">
          <nav className="container grid gap-4 py-4 px-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover:text-accent-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}