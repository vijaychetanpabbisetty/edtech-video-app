import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) return null;

  return (
    <div>
      <h2>{video.title}</h2>
      <video controls src={video.url} width="100%"></video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
