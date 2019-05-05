import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className='flex-cntr-cntr border-btm'>Loading!!!</div>;
  } else {
    console.log(video.snippet);
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <iframe src={videosrc} />
        <div className='flex-cntr-cntr border-around'>
          <div className='bold'>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
