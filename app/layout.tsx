import "./globals.css"

// next
import { Inter } from "next/font/google"

// hero-icons
import { FunnelIcon } from "@heroicons/react/24/solid"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dustin's Binder",
  description: "Collection of ninties hip-hop album covers, upscaled with AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-800`}>
        <header className="bg-gradient-to-r from-blue-700 to-indigo-900 flex flex-row px-4 py-2 items-center text-white w-fill">
          <FunnelIcon className="h-4 w-4" />
          &nbsp;
          <span className="cursor-default">album_a_z</span>
          <button className="bg-indigo-900 hover:bg-blue-700 border border-white rounded-md ml-4 px-2 py-1">
            sort
          </button>
        </header>
        {children}
      </body>
    </html>
  )
}
