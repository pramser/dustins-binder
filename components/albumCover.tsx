"use client"

import { useState } from "react"
import Image from "next/image"

interface Props {
  album: any
  setSelectedAlbum: any
}

export default function AlbumCover({ album, setSelectedAlbum }: Props) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      key={album.name}
      className="group relative aspect-square w-full md:w-1/4 lg:w-1/6"
      onClick={() => setSelectedAlbum(album)}
    >
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-900">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white" />
        </div>
      )}
      <Image
        className={`cursor-pointer object-cover duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        src={album.image}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        alt={album.name}
        fill
        sizes="(min-width: 1024px) 16.666vw, (min-width: 768px) 25vw, 100vw"
        onLoad={() => setIsLoaded(true)}
      />
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/75 opacity-0 duration-300 group-hover:opacity-100">
        <p className="italic max-w-full text-lg text-center text-ellipsis truncate whitespace-nowrap">
          &quot;{album.name}&quot;
        </p>
        <p className="font-bold max-w-full text-xl text-center text-ellipsis truncate whitespace-nowrap">{album.artist}</p>
        <p className="max-w-full text-sm text-center text-ellipsis truncate whitespace-nowrap">
          {album.releaseDate.getFullYear()}
        </p>
      </div>
    </div>
  )
}
