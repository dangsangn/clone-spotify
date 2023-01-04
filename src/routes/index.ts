import { BASE_URLS } from "@/assets/constants";
import AroundYou from "@/pages/AroundYou";
import ArtistDetail from "@/pages/ArtistDetail";
import Discover from "@/pages/Discover";
import Song from "@/pages/Song";
import SongDetail from "@/pages/SongDetail";
import TopArtist from "@/pages/TopArtist";
import TopSong from "@/pages/TopSong";
import DefaultLayout from "@/components/DefaultLayout";

export const routes = [
  {
    name: "Discover",
    to: BASE_URLS.Home,
    component: AroundYou,
    layout: DefaultLayout,
  },
  { name: "Around You", to: BASE_URLS.AroundYou },
  { name: "Top Artists", to: BASE_URLS.TopArtists },
  { name: "Top Charts", to: BASE_URLS.TopCharts },
];
