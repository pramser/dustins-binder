import "./globals.css"

// next
import { Inter } from "next/font/google"

// hero-icons

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dustin's Binder (90's Hip-Hop Albums)",
  description: "Collection of high-resolution, ninties hip-hop album covers",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-800`}>{children}</body>
    </html>
  )
}
