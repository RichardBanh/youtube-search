import React from "react";
import VideoItem from "./VideoItem";

const Videos = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>;
  });

  return (
    <>
      <div className="flex-cntr-cntr">{renderedList}</div>
    </>
  );
};

export default Videos;
