import './globals.css'
import { Manrope } from 'next/font/google'
import Sidebar from '@/components/layout/Sidebar'

const manrope = Manrope({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <div className="flex h-screen bg-[#F8F9FD]">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 