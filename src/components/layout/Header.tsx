'use client'

import React from 'react'
import Image from 'next/image'
import { Bell, MessageSquare, Settings, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold text-textPrimary">HR Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="p-2 text-textSecondary hover:text-textPrimary rounded-full hover:bg-secondary">
          <Bell size={20} />
        </button>
        <button className="p-2 text-textSecondary hover:text-textPrimary rounded-full hover:bg-secondary">
          <MessageSquare size={20} />
        </button>
        <button className="p-2 text-textSecondary hover:text-textPrimary rounded-full hover:bg-secondary">
          <Settings size={20} />
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="https://picsum.photos/200"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <p className="text-sm font-medium text-textPrimary">John Doe</p>
              <p className="text-xs text-textSecondary">HR Manager</p>
            </div>
            <ChevronDown size={16} className="text-textSecondary" />
          </div>
        </div>
      </div>
    </header>
  )
} 