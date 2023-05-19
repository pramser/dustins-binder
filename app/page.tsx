// next
import Image from "next/image"

// data
import { ALBUMS } from "@/types"

export default function Home() {
  return (
    <main className="flex flex-row mt-4 mx-4">
      {ALBUMS.map((album) => (
        <Image
          key={album.name}
          className="m-4"
          src={album.image}
          alt={album.name}
          width={250}
          height={250}
        />
      ))}
    </main>
  )
}
