// next
import Image from "next/image"

// data
import { ALBUMS } from "@/types"

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap">
      {ALBUMS.map((album) => (
        <div className="w-fill h-fit md:w-1/4 md:h-1/4 lg:w-1/6 lg:h-1/6 relative">
          <Image
            key={album.name}
            className="cursor-pointer hover:blur-sm object-cover"
            src={album.image}
            blurDataURL="/placeholder.png"
            alt={album.name}
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </main>
  )
}
