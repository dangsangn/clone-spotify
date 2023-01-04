import { SongCard } from "@/components";
import Loading from "@/components/LoadingSong";
import { useGetWorldChatQuery } from "@/services/shazam_rapid";
import { useSelector } from "@/store";
import React from "react";

type Props = {};

const Discover = (props: Props) => {
  const { data, isLoading, error } = useGetWorldChatQuery();
  const { currentIndex, isPlaying } = useSelector((state) => state.player);
  // console.log("data, isLoading, error", data, isLoading, error);
  return (
    <div className="py-6 px-4">
      <h2 className="mb-4 text-2xl font-bold">Recently played</h2>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-2	lg:grid-cols-4 xl:grid-cols-5">
        {isLoading
          ? Array.from({ length: 10 }, () =>
              Math.floor(Math.random() * 10)
            ).map((_, index) => <Loading key={index} />)
          : (data || []).map((item: any, index: number) => (
              <SongCard
                isPlaying={isPlaying && index === currentIndex}
                key={item?.key}
                item={item}
                data={data}
                index={index}
              />
            ))}
      </div>
    </div>
  );
};

export default Discover;
