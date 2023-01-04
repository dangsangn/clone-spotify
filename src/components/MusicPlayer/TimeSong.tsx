import React from "react";
import { getTimeSong } from "@/utils";

type Props = {
  timeCurrent: string | number;
  timeSong: string | number;
  setSeekTime: (value: number) => void;
};

const TimeSong = ({ timeCurrent, timeSong, setSeekTime }: Props) => {
  const duration = getTimeSong(Number(timeSong));
  const current = getTimeSong(Number(timeCurrent));

  const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeekTime(Number(event.target.value));
  };
  return (
    <div className="mt-2 flex w-full items-center justify-center gap-2">
      <span className="w-[40px] text-right text-[11px] text-[#b3b3b3]">
        {current.minute + ":" + current.seconds}
      </span>
      <input
        value={timeCurrent}
        type="range"
        className={` h-1 w-full `}
        onChange={handleChangeTime}
        max={timeSong}
        min={0}
      />
      <span className="w-[40px] text-left text-[11px] text-[#b3b3b3]">
        {duration.minute + ":" + duration.seconds}
      </span>
    </div>
  );
};

export default TimeSong;
