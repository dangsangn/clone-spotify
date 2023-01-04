import React from "react";
import {
  BsFillVolumeDownFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";

type Props = {
  volume: number;
  setVolume: (value: number) => void;
};

const VolumeBar = ({ volume, setVolume }: Props) => {
  const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  const handleClickVolume = () => {
    if (volume === 0) {
      setVolume(70);
    } else {
      setVolume(0);
    }
  };
  return (
    <div className="flex items-center justify-center gap-2">
      <span
        className="flex h-8 w-8 cursor-pointer text-[11px] text-[#b3b3b3]"
        onClick={handleClickVolume}
      >
        {volume === 0 && <BsFillVolumeMuteFill className="m-auto h-5 w-5" />}
        {volume > 0 && volume <= 50 && (
          <BsFillVolumeDownFill className="m-auto h-5 w-5" />
        )}
        {volume > 50 && <BsFillVolumeUpFill className="m-auto h-5 w-5" />}
      </span>
      <input
        type="range"
        className={`h-1 w-full `}
        value={volume}
        onChange={handleChangeVolume}
        min={0}
        max={100}
      />
    </div>
  );
};

export default VolumeBar;
