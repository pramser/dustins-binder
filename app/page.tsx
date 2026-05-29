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
            className="fixed inset-0 z-20 grid cursor-zoom-out place-items-center overflow-y-auto bg-black/85 p-4 text-white backdrop-blur-sm md:p-8"
          >
            <div className="flex min-h-full w-full max-w-6xl flex-col items-center justify-center gap-5 py-6 lg:min-h-0 lg:flex-row lg:items-center lg:gap-8 lg:py-0">
              <div className="relative aspect-square w-full max-w-[min(92vw,calc(100vh-16rem))] overflow-hidden shadow-2xl sm:max-w-[min(72vw,calc(100vh-12rem))] lg:max-w-[min(58vw,calc(100vh-4rem))]">
                <Image
                  src={selectedAlbum.image}
                  className="object-contain"
                  alt={selectedAlbum.name}
                  sizes="(min-width: 768px) 80vh, 92vw"
                  fill
                  priority
                />
              </div>
              <div className="w-full max-w-[min(92vw,36rem)] text-center drop-shadow-lg lg:max-w-sm lg:text-left">
                <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                  {selectedAlbum.artist}
                </p>
                <h1 className="text-2xl font-bold md:text-4xl">{selectedAlbum.name}</h1>
                <p className="mt-1 text-base text-white/80">{selectedAlbum.releaseDate.getFullYear()}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-left sm:mx-auto sm:max-w-md lg:mx-0">
                  <div className="border-l border-white/25 pl-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-white/50">Region</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{selectedAlbum.region}</dd>
                  </div>
                  <div className="border-l border-white/25 pl-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-white/50">Label</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{selectedAlbum.label}</dd>
                  </div>
                </dl>
                <div className="mt-5 border-t border-white/20 pt-4 text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Why It Matters</p>
                  <p className="mt-2 text-sm leading-6 text-white/85 md:text-base">{selectedAlbum.whyItMatters}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
