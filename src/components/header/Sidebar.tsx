"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Users,
  Trophy,
  Home,
  Network,
  BarChart2,
  Newspaper,
  CreditCard,
  Wallet,
} from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import { MdStadium } from "react-icons/md";

const menu = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Tournaments", href: "/", icon: Trophy },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Leagues", href: "/leagues", icon: Network },
  { name: "Leaderboard", href: "/leaderboard", icon: BarChart2 },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Arena", href: "/arena", icon: MdStadium },
  { name: "Subscriptions", href: "/subscriptions", icon: CreditCard },
  { name: "Wallet", href: "/wallet", icon: Wallet },
];

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="bg-[#040C15] border-r border-gray-700 px-2 text-white lg:flex flex-col items-center w-64 hidden h-full overflow-y-auto scrollbar-hide">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={100}
          className="mt-4"
        />
        <nav className="flex flex-col gap-2 py-8">
          {menu.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 border-l-2 transition-all 
                  ${
                    isActive
                      ? "text-red-500 border-red-500"
                      : "border-transparent hover:text-red-500 hover:border-red-500"
                  }`}
              >
                <Icon size={20} className={isActive ? "text-red-500" : ""} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#040C15] text-white overflow-y-auto transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image src="/images/logo.png" alt="logo" width={100} height={80} />
          <button onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          {menu.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all 
                  ${
                    isActive
                      ? "text-red-500 border-red-500"
                      : "border-transparent hover:text-red-500 hover:border-red-500"
                  }`}
                onClick={closeSidebar}
              >
                <Icon size={20} className={isActive ? "text-red-500" : ""} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
