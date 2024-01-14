import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchContainer = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  return (
    <div className="col-span-11">
      <div className="">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchContainer;
