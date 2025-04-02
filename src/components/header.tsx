"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Laptop } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 8
      if (window.scrollY >= triggerPoint) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const ThemeIcon = () => {
    if (!mounted) {
      return null
    }
    if (theme === "light") {
      return <Sun className="h-[1.2rem] w-[1.2rem]" />
    } else if (theme === "dark") {
      return <Moon className="h-[1.2rem] w-[1.2rem]" />
    } else {
      return <Laptop className="h-[1.2rem] w-[1.2rem]" />
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white dark:bg-slate-800 border-b shadow-sm
      transform transition-transform duration-500 transition-timing-function-[cubic-bezier(0.19,1,0.22,1)]
      ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-800 dark:text-white">ShinQuick</span>
          <span className="text-sm text-gray-500 dark:text-gray-300 text-nowrap">震Quick</span>
        </div>
        <div className="flex gap-3">
          <Button
            variant="default"
            className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer transition-colors"
            onClick={() => window.open("https://shin-quick.vercel.app", "_blank")}
          >
            アプリを開く
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <ThemeIcon />
                <span className="sr-only">テーマを切り替え</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>ライトモード</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>ダークモード</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>システム</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
