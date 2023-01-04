/* eslint-disable prettier/prettier */
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const genres = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
];

export const BASE_URLS = {
  Home: "/",
  AroundYou: "/around-you",
  TopArtists: "/top-artists",
  TopCharts: "/top-charts",
  SongDetail: "/song",
  Artists: "/artist",
};

export const menus = [
  { icon: HiOutlineHome, name: "Discover", to: BASE_URLS.Home },
  { icon: HiOutlinePhotograph, name: "Around You", to: BASE_URLS.AroundYou },
  { icon: HiOutlineUserGroup, name: "Top Artists", to: BASE_URLS.TopArtists },
  { icon: HiOutlineHashtag, name: "Top Charts", to: BASE_URLS.TopCharts },
];
