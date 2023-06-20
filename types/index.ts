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
    releaseDate: new Date(2008, 8, 30),
    image: "/da-incredible-rap-team.jpeg",
  },
  {
    name: "For the Hell of It",
    artist: "Hell Rell",
    releaseDate: new Date(2007, 8, 25),
    image: "/for-the-hell-of-it.jpeg",
  },
  {
    name: "Funky As I Wanna Be",
    artist: "Pooh Man",
    releaseDate: new Date(1992, 0, 1),
    image: "/funky-as-i-wanna-be.jpeg",
  },
  {
    name: "Give It 2 'Em Raw",
    artist: "Soulja Slim",
    releaseDate: new Date(1998, 4, 19),
    image: "/give-it-2-em-raw.jpeg",
  },
  {
    name: "Justicizms",
    artist: "Kool & Deadly",
    releaseDate: new Date(1987, 0, 1),
    image: "/justicizms.jpeg",
  },
  {
    name: "K9 Posse",
    artist: "K9 Posse",
    releaseDate: new Date(1988, 0, 1),
    image: "/k9-posse.jpeg",
  },
  {
    name: "My Turn to Eat",
    artist: "Big Kuntry King",
    releaseDate: new Date(2008, 8, 30),
    image: "/my-turn-to-eat.jpeg",
  },
  {
    name: "Ronald Dregan",
    artist: "Mac Dre",
    releaseDate: new Date(2004, 6, 20),
    image: "/ronald-dregan.jpeg",
  },
  {
    name: "The Dude",
    artist: "Devin",
    releaseDate: new Date(1998, 5, 16),
    image: "/the-dude.jpeg",
  },
  {
    name: "3 Feet High and Rising",
    artist: "De La Soul",
    releaseDate: new Date(1989, 2, 3),
    image: "/3-feet-high-and-rising.jpg",
  },
  {
    name: "Illmatic",
    artist: "Nas",
    releaseDate: new Date(1994, 3, 19),
    image: "/illmatic.jpeg",
  },
  {
    name: "Nastradamus",
    artist: "Nas",
    releaseDate: new Date(1999, 10, 23),
    image: "/nastradamus.jpeg",
  },
  {
    name: "The Chronic",
    artist: "Dr. Dre",
    releaseDate: new Date(1992, 11, 15),
    image: "/the-chronic.jpeg",
  },
  {
    name: "Enter the Wu-Tang (36 Chambers)",
    artist: "Wu-Tang Clan",
    releaseDate: new Date(1993, 10, 9),
    image: "/36-chambers.jpg",
  },
  {
    name: "Midnight Marauders",
    artist: "A Tribe Called Quest",
    releaseDate: new Date(1993, 10, 9),
    image: "/midnight-marauders.jpeg",
  },
  {
    name: "The Blueprint",
    artist: "Jay Z",
    releaseDate: new Date(2001, 8, 11),
    image: "/the-blueprint.jpeg",
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
