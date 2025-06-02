'use client'

import Link from 'next/link'
import { X, Dice5, Gamepad2, Star, Sparkles, Tv, Users, Trophy, Table2, Zap, CircleDollarSign, Flame, Factory } from 'lucide-react'
import { useSidebar } from '@/context/SidebarContext'

const menu = [
  { label: 'Casino', href: '/casino', icon: Dice5 },
  { label: 'Slots', href: '/casino', icon: Gamepad2 },
  { label: 'Popular Picks', href: '/casino', icon: Star },
  { label: 'Latest Release', href: '/casino', icon: Sparkles },
  { label: 'Live Casino', href: '/casino', icon: Tv },
  { label: 'Game Shows', href: '/casino', icon: Users },
  { label: 'Originals', href: '/casino', icon: Trophy },
  { label: 'Table Games', href: '/casino', icon: Table2 },
  { label: 'Instant Games', href: '/casino', icon: Zap },
  { label: 'Bingo', href: '/casino', icon: CircleDollarSign },
  { label: 'Popular', href: '/casino', icon: Flame },
  { label: 'Provider', href: '/casino', icon: Factory },
]

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="bg-gradient-to-b from-[#04022a] to-[#1f276c] border-r border-[#6f6f6f] text-white w-64 hidden md:block h-full overflow-y-auto scrollbar-hide">
        <nav className="flex flex-col gap-2 py-8 px-2">
          {menu.map((item, idx) => {
            const Icon = item.icon
            return (
              <Link
                key={idx}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-[#34faf9] hover:text-[#0e161d]"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
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
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#101e33] text-white overflow-y-auto transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          {menu.map((item, idx) => {
            const Icon = item.icon
            return (
              <Link
                key={idx}
                href={item.href}
                className="flex items-center gap-3 px-2 py-2 rounded hover:bg-[#16253e]"
                onClick={closeSidebar}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
