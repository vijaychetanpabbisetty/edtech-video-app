// components/VideoList.js

import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoContext from '../context/VideoContext';
import { getVideos } from '../api/api';

const VideoList = ({ userId }) => {
  const { state, dispatch } = useContext(VideoContext);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videos = await getVideos(userId);
        dispatch({ type: 'SET_VIDEOS', payload: videos }); // Update state correctly
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, [userId, dispatch]);

  // Ensure state.videos is an array before mapping
  if (!Array.isArray(state.videos)) {
    return <p>Loading...</p>; // or handle loading state
  }

  return (
    <div>
      <h1>Video List</h1>
      {state.videos.map(video => (
        <div key={video.id}>
          <Link to={`/video/${video.id}`}>
            <h2>{video.title}</h2>
          </Link>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
