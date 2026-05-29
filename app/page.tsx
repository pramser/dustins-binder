"use client"

// react
import { useEffect, useState } from "react"

// next
import Image from "next/image"

// components
import Header from "@/components/header"
import AlbumCover from "@/components/albumCover"

// data
import { ALBUMS, SORT_METHODS } from "@/types"

export default function Home() {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty("--scroll", window.scrollY.toString())
      },
      false
    )
  }, [])

  const [selectedSortIndex, setSelectedSortIndex] = useState(0)
  const [selectedAlbum, setSelectedAlbum] = useState<any | null>(null)

  const selectNextSortMethod = () => {
    var next = selectedSortIndex + 1
    setSelectedSortIndex(next === SORT_METHODS.length ? 0 : next)
  }

  let selectedSortMethod = SORT_METHODS[selectedSortIndex].method

  return (
    <>
      <Header selectedSortName={SORT_METHODS[selectedSortIndex].name} sortButtonOnClick={selectNextSortMethod} />
      <main className="flex flex-row flex-wrap">
        {ALBUMS.sort(selectedSortMethod).map((album) => (
          <AlbumCover key={album.name} album={album} setSelectedAlbum={setSelectedAlbum} />
        ))}
        <div id="fader-box" />
        {selectedAlbum && (
          <div
            onClick={() => setSelectedAlbum(null)}
            className="fixed inset-0 z-20 grid cursor-zoom-out place-items-center bg-black/85 p-4 text-white backdrop-blur-sm md:p-8"
          >
            <div className="flex max-h-full w-full max-w-5xl flex-col items-center gap-4">
              <div className="relative aspect-square w-full max-w-[min(92vw,calc(100vh-10rem))] overflow-hidden shadow-2xl">
                <Image
                  src={selectedAlbum.image}
                  className="object-contain"
                  alt={selectedAlbum.name}
                  sizes="(min-width: 768px) 80vh, 92vw"
                  fill
                  priority
                />
              </div>
              <div className="max-w-[min(92vw,42rem)] text-center drop-shadow-lg">
                <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                  {selectedAlbum.artist}
                </p>
                <h1 className="text-2xl font-bold md:text-4xl">{selectedAlbum.name}</h1>
                <p className="mt-1 text-base text-white/80">{selectedAlbum.releaseDate.getFullYear()}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
