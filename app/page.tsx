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
        <div
          onClick={() => setSelectedAlbum(null)}
          className={`fixed top-0 h-full w-full z-10 ${selectedAlbum ? "visible" : "hidden"}`}
        >
          <Image
            src={selectedAlbum?.image}
            className="w-full h-auto md:w-auto md:h-full"
            alt="Album image"
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>
      </main>
    </>
  )
}
