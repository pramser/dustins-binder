// next
import Image from "next/image"

// data
import { ALBUMS } from "@/types"

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap justify-center mt-4 mx-4">
      {ALBUMS.map((album) => (
        <Image
          key={album.name}
          className="m-4 border border-black shadow-md cursor-pointer hover:blur-sm"
          src={album.image}
          blurDataURL="/placeholder.png"
          alt={album.name}
          width={220}
          height={220}
        />
      ))}
    </main>
  )
}
