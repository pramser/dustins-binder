import { Album } from "./album"

export const ALBUMS: Album[] = [
  {
    name: "Doin' Thangs",
    artist: "Big Bear",
    releaseDate: new Date(1998, 6, 14),
    image: "/doin-thangs.jpeg",
  },
  {
    name: "The Leprechaun",
    artist: "Lil Flip",
    releaseDate: new Date(2000, 6, 18),
    image: "/the-leprechaun.jpeg",
  },
  {
    name: "D.I.R.T. (Da Incredible Rap Team)",
    artist: "Heltah Skeltah",
    releaseDate: new Date(2000, 6, 18),
    image: "/da-incredible-rap-team.jpeg",
  },
  {
    name: "For the Hell of It",
    artist: "Hell Rell",
    releaseDate: new Date(2000, 6, 18),
    image: "/for-the-hell-of-it.jpeg",
  },
  {
    name: "Funky As I Wanna Be",
    artist: "Pooh Man",
    releaseDate: new Date(2000, 6, 18),
    image: "/funky-as-i-wanna-be.jpeg",
  },
  {
    name: "Give It 2 'Em Raw",
    artist: "Soulja Slim",
    releaseDate: new Date(2000, 6, 18),
    image: "/give-it-2-em-raw.jpeg",
  },
  {
    name: "Justicizms",
    artist: "Kool & Deadly",
    releaseDate: new Date(2000, 6, 18),
    image: "/justicizms.jpeg",
  },
  {
    name: "K9 Posse",
    artist: "K9 Posse",
    releaseDate: new Date(2000, 6, 18),
    image: "/k9-posse.jpeg",
  },
  {
    name: "My Turn to Eat",
    artist: "Big Kuntry King",
    releaseDate: new Date(2000, 6, 18),
    image: "/my-turn-to-eat.jpeg",
  },
  {
    name: "Ronald Dregan",
    artist: "Mac Dre",
    releaseDate: new Date(2000, 6, 18),
    image: "/ronald-dregan.jpeg",
  },
  {
    name: "The Dude",
    artist: "Devin",
    releaseDate: new Date(2000, 6, 18),
    image: "/the-dude.jpeg",
  },
]

export const SORT_METHODS = [
  {
    name: "artist_a_to_z",
    method: (a: Album, b: Album) => {
      return a.artist > b.artist ? 1 : -1
    },
  },
  {
    name: "album_a_to_z",
    method: (a: Album, b: Album) => {
      return a.name > b.name ? 1 : -1
    },
  },
  {
    name: "release_old_to_new",
    method: (a: Album, b: Album) => {
      return a.releaseDate > b.releaseDate ? 1 : -1
    },
  },
]
