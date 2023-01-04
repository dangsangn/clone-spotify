import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPause } from "react-icons/io";

import { playPause, setActiveSong } from "@/features/playerSlice";
import { useDispatch } from "@/store";
import { getNameArtist } from "@/utils";
import Loading from "./LoadingSong";

type Props = { data: any; index: number; item: any; isPlaying: boolean };

const SongCard = ({ data, item, index, isPlaying }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = false;
  const handlePlay = (e: any) => {
    e.stopPropagation();
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(setActiveSong({ song: item, data, i: index }));
    }
  };

  const handleRedirectSongDetail = () => {
    navigate(`/song/${item.key}`);
  };

  return loading ? (
    <Loading />
  ) : (
    <div
      className=" group cursor-pointer overflow-hidden rounded-md bg-[#181818] p-4 transition-all hover:bg-[#282828]"
      onClick={handleRedirectSongDetail}
    >
      <div className="relative mb-4 overflow-hidden rounded-md">
        <img src={item?.images?.background} alt="photo music" />
        <span
          onClick={handlePlay}
          className={` absolute right-2 bottom-2 flex h-12 w-12 items-center justify-center rounded-[50%] bg-primary  transition-all hover:scale-105 hover:scale-105 ${
            isPlaying
              ? "visible opacity-100"
              : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
          }`}
        >
          {isPlaying ? (
            <IoMdPause className=" h-6 w-6 text-bg-press" />
          ) : (
            <BsFillCaretRightFill className=" h-6 w-6 text-bg-press" />
          )}
        </span>
      </div>
      <Link
        to={`/song/${item?.key}`}
        className="pb-1 text-base font-bold text-text-base line-clamp-1"
      >
        {item?.title}
      </Link>
      <div className="flex items-center gap-1 text-sm text-text-subdued">
        {item.artists.map((artist: any, index: number) => (
          <React.Fragment key={index}>
            {index > 0 && <span>&</span>}
            <Link
              to={`/artists/${artist.adamid}`}
              className="capitalize line-clamp-2 hover:underline"
            >
              {getNameArtist(artist.alias)}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SongCard;
