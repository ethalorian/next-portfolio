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
    <header className="sticky top-0 z-50 w-full bg-background shadow-md">
        <div className=" hidden items-center justify-center w-full md:flex">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex justify-center space-x-40">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-18 w-max items-center justify-center rounded-md bg-background px-4 py-4 text-xl font-extrabold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-end">
            <nav className="flex items-center">
                {isMobile && (
                <Button
                    variant="ghost"
                    className="md:hidden h-32 "
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X className="h-24 w-24" /> : <Layers3 className="h-24 w-24" />}
                    <span className="sr-only">Toggle menu</span>
                </Button>
                )}
            </nav>
        </div>
        {isMobileMenuOpen && (
  <div className="absolute left-0 right-0 top-32 z-50 bg-background shadow-lg md:hidden">
    <nav className="container grid gap-4 py-4 px-4">
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="inline-flex h-16 items-center justify-center rounded-md bg-background px-4 text-2xl font-bold transition-colors hover:bg-accent hover:text-accent-foreground"
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