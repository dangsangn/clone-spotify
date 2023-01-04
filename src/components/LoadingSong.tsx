import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
type Props = {};

const LoadingSong = (props: Props) => {
  return (
    <div>
      <Skeleton className="h-[177px]" />
      <Skeleton className="max-w-[50%] rounded-sm" />
      <Skeleton className="max-w-[80%] rounded-sm" />
    </div>
  );
};

export default LoadingSong;
