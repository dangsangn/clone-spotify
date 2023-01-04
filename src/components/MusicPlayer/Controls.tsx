import React from "react";
import { IoMdPause } from "react-icons/io";
import { BiShuffle } from "react-icons/bi";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { FiRepeat } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { RiRepeatOneLine } from "react-icons/ri";
import styles from "./styles/MusicPlayer.module.css";

type Props = {
  isPlaying: boolean;
  isActive: boolean;
  repeat: boolean;
  setRepeat: (value: boolean) => void;
  shuffle: boolean;
  setShuffle: (value: boolean) => void;
  currentSongs: any;
  handlePlayPause: () => void;
  handleChangeSong: (value: number) => void;
};

const Controls = ({
  isPlaying,
  isActive,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handleChangeSong,
}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className={`grid h-8 w-8 place-items-center ${
          shuffle && styles.active
        }`}
        onClick={() => setShuffle(!shuffle)}
      >
        <BiShuffle className="h-5 w-5 opacity-80 transition-[opacity] ease-linear hover:opacity-100" />
      </button>
      <button
        className="grid h-8 w-8 place-items-center"
        onClick={() => handleChangeSong(-1)}
      >
        <GiPreviousButton className="h-5 w-5 opacity-80 transition-[opacity] ease-linear hover:opacity-100" />
      </button>
      <button
        className="mx-2 grid h-8 w-8 place-items-center rounded-full bg-white"
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <IoMdPause className="h-[16px] w-[16px] text-black" />
        ) : (
          <FaPlay className="h-[14px] w-[14px] text-black" />
        )}
      </button>
      <button className="grid h-8 w-8 place-items-center">
        <GiNextButton
          className="h-5 w-5 opacity-80 transition-[opacity] ease-linear hover:opacity-100"
          onClick={() => handleChangeSong(1)}
        />
      </button>
      <button
        className={`grid h-8 w-8 place-items-center ${repeat && styles.active}`}
        onClick={() => setRepeat(!repeat)}
      >
        {!repeat ? (
          <FiRepeat
            className={`h-5 w-5  opacity-80 transition-[opacity] ease-linear hover:opacity-100`}
          />
        ) : (
          <RiRepeatOneLine
            className={`h-5 w-5  opacity-80 transition-[opacity] ease-linear hover:opacity-100 `}
          />
        )}
      </button>
    </div>
  );
};

export default Controls;
