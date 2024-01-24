import { Album } from "./album"

export const ALBUMS: Album[] = [
  {
    name: "The Low End Theory",
    artist: "A Tribe Called Quest",
    releaseDate: new Date(1991, 8, 24),
    image: "/the-low-end-theory.jpeg",
  },
  {
    name: "Midnight Marauders",
    artist: "A Tribe Called Quest",
    releaseDate: new Date(1993, 10, 9),
    image: "/midnight-marauders.jpeg",
  },
  {
    name: "Doin' Thangs",
    artist: "Big Bear",
    releaseDate: new Date(1998, 6, 14),
    image: "/doin-thangs.jpeg",
  },
  {
    name: "My Turn to Eat",
    artist: "Big Kuntry King",
    releaseDate: new Date(2008, 8, 30),
    image: "/my-turn-to-eat.jpeg",
  },
  {
    name: "3 Feet High and Rising",
    artist: "De La Soul",
    releaseDate: new Date(1989, 2, 3),
    image: "/3-feet-high-and-rising.jpg",
  },
  {
    name: "The Dude",
    artist: "Devin",
    releaseDate: new Date(1998, 5, 16),
    image: "/the-dude.jpeg",
  },
  {
    name: "The Chronic",
    artist: "Dr. Dre",
    releaseDate: new Date(1992, 11, 15),
    image: "/the-chronic.jpeg",
  },
  {
    name: "For the Hell of It",
    artist: "Hell Rell",
    releaseDate: new Date(2007, 8, 25),
    image: "/for-the-hell-of-it.jpeg",
  },
  {
    name: "D.I.R.T. (Da Incredible Rap Team)",
    artist: "Heltah Skeltah",
    releaseDate: new Date(2008, 8, 30),
    image: "/da-incredible-rap-team.jpeg",
  },
  {
    name: "Amerikkka's Most Wanted",
    artist: "Ice Cube",
    releaseDate: new Date(1990, 5, 16),
    image: "/amerikkkas-most-wanted.jpeg",
  },
  {
    name: "Reasonable Doubt",
    artist: "Jay Z",
    releaseDate: new Date(1996, 5, 25),
    image: "/reasonable-doubt.jpeg",
  },
  {
    name: "The Blueprint",
    artist: "Jay Z",
    releaseDate: new Date(2001, 8, 11),
    image: "/the-blueprint.jpeg",
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
    name: "The Leprechaun",
    artist: "Lil Flip",
    releaseDate: new Date(2000, 6, 18),
    image: "/the-leprechaun.jpeg",
  },
  {
    name: "Operation: Doomsday",
    artist: "MF Doom",
    releaseDate: new Date(1999, 1, 1),
    image: "/operation-doomsday.jpeg",
  },
  {
    name: "The Infamous",
    artist: "Mobb Deep",
    releaseDate: new Date(1995, 3, 25),
    image: "/the-infamous.jpeg",
  },
  {
    name: "Ronald Dregan",
    artist: "Mac Dre",
    releaseDate: new Date(2004, 6, 20),
    image: "/ronald-dregan.jpeg",
  },
  {
    name: "Blackstar",
    artist: "Mos Def & Talib Kweli",
    releaseDate: new Date(1998, 8, 29),
    image: "/blackstar.jpeg",
  },
  {
    name: "Illmatic",
    artist: "Nas",
    releaseDate: new Date(1994, 3, 19),
    image: "/illmatic.jpeg",
  },
  {
    name: "Stillmatic",
    artist: "Nas",
    releaseDate: new Date(2001, 11, 18),
    image: "/stillmatic.jpeg",
  },
  {
    name: "Nastradamus",
    artist: "Nas",
    releaseDate: new Date(1999, 10, 23),
    image: "/nastradamus.jpeg",
  },
  {
    name: "Ready to Die",
    artist: "Notorious B.I.G.",
    releaseDate: new Date(1994, 8, 13),
    image: "/ready-to-die.jpeg",
  },
  {
    name: "Straight Outta Compton",
    artist: "N.W.A.",
    releaseDate: new Date(1988, 7, 8),
    image: "/straight-outta-compton.jpeg",
  },
  {
    name: "Aquemini",
    artist: "Outkast",
    releaseDate: new Date(1998, 8, 29),
    image: "/aquemini.jpeg",
  },
  {
    name: "Funky As I Wanna Be",
    artist: "Pooh Man",
    releaseDate: new Date(1992, 0, 1),
    image: "/funky-as-i-wanna-be.jpeg",
  },
  {
    name: "Only Built 4 Cuban Linx",
    artist: "Raekwon",
    releaseDate: new Date(1995, 7, 1),
    image: "/only-built-4-cuban-linx.jpeg",
  },
  {
    name: "Liquid Swords",
    artist: "RZA",
    releaseDate: new Date(1995, 11, 7),
    image: "/liquid-swords.jpeg",
  },
  {
    name: "The Diary",
    artist: "Scarface",
    releaseDate: new Date(1994, 9, 18),
    image: "/the-diary.jpeg",
  },
  {
    name: "Give It 2 'Em Raw",
    artist: "Soulja Slim",
    releaseDate: new Date(1998, 4, 19),
    image: "/give-it-2-em-raw.jpeg",
  },
  {
    name: "All Eyez on Me",
    artist: "Tupac",
    releaseDate: new Date(1996, 1, 13),
    image: "/all-eyez-on-me.jpeg",
  },
  {
    name: "Enter the Wu-Tang (36 Chambers)",
    artist: "Wu-Tang Clan",
    releaseDate: new Date(1993, 10, 9),
    image: "/36-chambers.jpg",
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
