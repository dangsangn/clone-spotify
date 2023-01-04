import React, { useRef, useEffect } from "react";

type Props = {
  activeSong: any;
  volume: number;
  isPlaying: boolean;
  seekTime: number;
  repeat: boolean;
  onEnded: (value: number) => void;
  setAppTime: (value: number) => void;
  setDuration: (value: number) => void;
};

const Audio = ({
  activeSong,
  volume,
  isPlaying,
  seekTime,
  repeat,
  onEnded,
  setAppTime,
  setDuration,
}: Props) => {
  const refAudio = useRef<HTMLAudioElement>(null);

  const handleTimeUpdate = (event: any) => {
    setAppTime(event.target.currentTime);
  };

  const handleLoadedData = (event: any) => {
    setDuration(event.target.duration);
  };

  const handleEndedAudio = () => {
    onEnded(1);
  };

  if (refAudio.current) {
    if (isPlaying) {
      refAudio.current.play();
    } else {
      refAudio.current.pause();
    }
  }
  useEffect(() => {
    if (refAudio.current) {
      refAudio.current.currentTime = seekTime;
    }
  }, [seekTime]);

  useEffect(() => {
    if (refAudio.current) {
      refAudio.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div>
      <audio
        ref={refAudio}
        loop={repeat}
        src={activeSong?.hub?.actions[1]?.uri}
        onEnded={handleEndedAudio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
    </div>
  );
};

export default Audio;
