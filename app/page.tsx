// next
import Image from "next/image"

// data
import { ALBUMS } from "@/types"

export default function Home() {
  return (
    <main className="flex flex-row p-8">
      {ALBUMS.map((album) => (
        <Image
          key={album.name}
          className="m-2"
          src={album.image}
          alt={album.name}
          width={250}
          height={250}
        />
      ))}
    </main>
  )
}
