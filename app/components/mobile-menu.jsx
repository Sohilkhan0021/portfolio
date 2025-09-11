"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            sohil.dev
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-6 mt-10">
          <Link href="#about"className="text-lg font-medium hover:text-primary transition-colors"onClick={handleLinkClick}>About</Link>
          <Link href="#projects"className="text-lg font-medium hover:text-primary transition-colors"onClick={handleLinkClick}>Projects</Link>
          <Link href="#blog"className="text-lg font-medium hover:text-primary transition-colors"onClick={handleLinkClick}>Blog</Link>
          <Link href="#tech"className="text-lg font-medium hover:text-primary transition-colors"onClick={handleLinkClick}>Tech Stack</Link>
        <a
  href="https://drive.google.com/file/d/1EA_OG_VBrYy4O-RS4r5VejTK7Npm6WOh/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-full mt-4 px-4 py-2 bg-primary text-white text-center rounded-md hover:bg-primary/90 transition"
>
  Resume
</a>

        </nav>
      </SheetContent>
    </Sheet>
  )
}
