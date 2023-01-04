import { BASE_URLS } from "@/assets/constants";
import { getNameArtist } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";
import TextAnimation from "../TextAnimation";
import styles from "./styles/MusicPlayer.module.css";

type Props = {
  title: string;
  artists: any;
  id: string | number;
  image: string;
  isPlaying: boolean;
};

const InfoSong = ({ title, artists, image, id, isPlaying }: Props) => {
  return (
    <div className="flex items-center">
      <div
        className={`h-10 w-10 animate-rotateInfinity overflow-hidden rounded-full md:h-[56px] md:w-[56px] ${
          isPlaying ? styles.animationPlay : styles.animationPause
        }`}
      >
        <img src={image} alt="song image" />
      </div>
      <div className="ml-2">
        <TextAnimation width={100}>
          <Link
            className="block text-sm font-bold text-text-base hover:underline "
            to={`${BASE_URLS.SongDetail}/${id}`}
          >
            {title}
          </Link>
        </TextAnimation>
        <TextAnimation>
          <div className="flex items-center gap-1 text-sm text-text-subdued">
            {artists.map((artist: any, index: number) => (
              <React.Fragment key={index}>
                {index > 0 && <span>&</span>}
                <Link
                  to={`${BASE_URLS.Artists}/${artist.adamid}`}
                  className="capitalize line-clamp-2 hover:underline"
                >
                  {getNameArtist(artist.alias)}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </TextAnimation>
      </div>
    </div>
  );
};

export default InfoSong;
