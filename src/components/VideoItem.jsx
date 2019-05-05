import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <>
      <div
        onClick={() => onVideoSelect(video)}
        className='border-btm side-side hover'
      >
        <img src={video.snippet.thumbnails.medium.url} alt='' />
        <div className='brick-sizing hover'>
          <label className='hover'>{video.snippet.title}</label>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
