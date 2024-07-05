"use client"

import Image from "next/image"

interface Props {
  album: any
  setSelectedAlbum: any
}

export default function AlbumCover({ album, setSelectedAlbum }: Props) {
  return (
    <div key={album.name} className="w-full h-fit md:w-1/4 md:h-1/4 lg:w-1/6 lg:h-1/6 relative">
      <Image
        className="cursor-pointer object-cover z-0"
        src={album.image}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        alt={album.name}
        height={0}
        width={0}
        sizes="50vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        className="w-full h-full bg-white/75 duration-300 inset-0 opacity-0 hover:opacity-100 absolute z-10 flex flex-col justify-center items-center"
        onClick={() => setSelectedAlbum(album)}
      >
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
