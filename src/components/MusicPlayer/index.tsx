import { useState } from "react";

import { changeSong, playPause } from "@/features/playerSlice";
import { useDispatch, useSelector } from "@/store";
import Audio from "./Audio";
import Controls from "./Controls";
import InfoSong from "./InfoSong";
import TimeSong from "./TimeSong";
import VolumeBar from "./VolumeBar";
import PlayAnimation from "../PlayAnimation";
type Props = {};

const MusicPlayer = (props: Props) => {
  const { isPlaying, activeSong, isActive, currentSongs, currentIndex } =
    useSelector((state) => state.player);
  const dispatch = useDispatch();
  // console.log("activeSong", activeSong);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(30);
  const [seekTime, setSeekTime] = useState<number>(0);
  const [appTime, setAppTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [shuffle, setShuffle] = useState<boolean>(false);

  const handlePlayPause = () => {
    dispatch(playPause(!isPlaying));
  };
  const handleChangeSong = (value: number) => {
    //value = -1 => prev song
    //value = 1 => next song
    let indexNow = currentIndex;
    console.log(2222);
    if (shuffle) {
      if (appTime < 3 && value === -1) {
        //set current equal current
        setSeekTime(0);
        setAppTime(0);
      } else {
        const randomIndex = Math.floor(Math.random() * currentSongs.length);
        console.log("randomIndex", randomIndex);
        indexNow = randomIndex;
      }
    } else {
      if (value === -1) {
        if (repeat) {
          //set current equal current
          setSeekTime(0);
          setAppTime(0);
        } else {
          indexNow =
            currentIndex - 1 < 0 ? currentSongs.length - 1 : currentIndex - 1;
        }
      } else if (value === 1) {
        indexNow =
          currentIndex + 1 > currentSongs.length - 1 ? 0 : currentIndex + 1;
        setRepeat(false);
      }
    }
    dispatch(changeSong(indexNow));
  };

  return activeSong.hasOwnProperty("key") ? (
    <div className="flex h-full justify-between gap-2 bg-[#181818] px-4 sm:gap-3 md:gap-4">
      <InfoSong
        title={activeSong.title}
        artists={activeSong.artists}
        id={activeSong.key}
        image={activeSong.images.background}
        isPlaying={isPlaying}
      />
      <div className="ml-2 flex w-[40%] max-w-[722px] flex-1 flex-col items-center justify-center">
        <Audio
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleChangeSong}
          setAppTime={setAppTime}
          setDuration={setDuration}
        />
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handleChangeSong={handleChangeSong}
        />
        <TimeSong
          timeCurrent={appTime}
          timeSong={duration}
          setSeekTime={setSeekTime}
        />
      </div>
      <VolumeBar volume={volume} setVolume={setVolume} />
    </div>
  ) : (
    <div>
      "No song selected" <PlayAnimation width="16px" />
    </div>
  );
};

export default MusicPlayer;
