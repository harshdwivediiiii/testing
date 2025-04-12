"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Menu,
  Bell,
  LayoutDashboard,
  BarChart3,
  Users,
  ShieldCheck,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/ui/modetoggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useTheme } from "next-themes"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Volunteers", icon: Users, href: "/volunteers" },
  { label: "Safe Zones", icon: ShieldCheck, href: "/safezones" },
  { label: "Reports", icon: FileText, href: "/reports" },
]

export function Navbar() {
  const [query, setQuery] = useState("")
  const router = useRouter()
  const { theme } = useTheme()

  const filteredSuggestions = query
    ? navItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <nav className="w-full flex justify-between items-center px-4 py-2 border-b shadow-sm bg-background">
      {/* Left: Logo + Mobile Sheet */}
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col justify-between p-4">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">
                  Women Safety App
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col justify-between h-full">
                <div>
                  <Link href="/" className="flex items-center gap-2 mb-6">
                    <Image
                      src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                    <span className="text-lg font-semibold">Women Safety</span>
                  </Link>
                  <div className="flex flex-col gap-4">
                    {navItems.map(({ label, icon: Icon, href }) => (
                      <Link href={href} key={label}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Icon className="mr-2 h-4 w-4" />
                          {label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-6 border-t pt-4">
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={theme === "dark" ? "/logo-white.png" : "/logo-black.png"}
            alt="Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-semibold whitespace-nowrap hidden sm:block">
            Women Safety Analytics
          </span>
        </Link>
      </div>

      {/* Center Navigation (Desktop) */}
      <div className="hidden md:flex gap-4 items-center">
        {navItems.map(({ label, icon: Icon, href }) => (
          <Link href={href} key={label}>
            <Button variant="ghost" className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          </Link>
        ))}
      </div>

      {/* Right: Search, Notification, Avatar, Toggle */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative w-[200px] hidden sm:block">
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-4"
          />
          {filteredSuggestions.length > 0 && (
            <div className="absolute bg-white dark:bg-zinc-900 border rounded shadow mt-1 w-full z-50">
              {filteredSuggestions.map(({ label, icon: Icon, href }) => (
                <div
                  key={label}
                  className="px-3 py-1 flex items-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-sm"
                  onClick={() => {
                    setQuery("")
                    router.push(href)
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <p className="text-sm font-medium">No new notifications</p>
          </PopoverContent>
        </Popover>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage
                src="https://github.com/harshdwivediiiii.png"
                alt="@user"
              />
              <AvatarFallback>HW</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => router.push("/profile")}>
              My Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Logged out")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dark/Light Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  )
}
