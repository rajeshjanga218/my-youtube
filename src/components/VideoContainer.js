import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const useParams = useSearchParams();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json);
    setVideoList(json?.items);
  };
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {videoList?.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
