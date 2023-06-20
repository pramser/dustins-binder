"use client"

// react
import { useState } from "react"

// next
import Image from "next/image"

// components
import Header from "@/components/header"

// data
import { ALBUMS, SORT_METHODS } from "@/types"

export default function Home() {
  const [selectedSortIndex, setSelectedSortIndex] = useState(0)

  const selectNextSortMethod = () => {
    var next = selectedSortIndex + 1
    setSelectedSortIndex(next === SORT_METHODS.length ? 0 : next)
  }

  let selectedSortMethod = SORT_METHODS[selectedSortIndex].method

  return (
    <>
      <Header
        selectedSortName={SORT_METHODS[selectedSortIndex].name}
        sortButtonOnClick={selectNextSortMethod}
      />
      <main className="flex flex-row flex-wrap">
        {ALBUMS.sort(selectedSortMethod).map((album) => (
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
    </>
  )
}
