import React, { createContext, useReducer } from 'react';
import VideoReducer from './VideoReducer';

const initialState = {
  videos: [],
  selectedVideo: null,
  comments: [],
};

const VideoContext = createContext(initialState);

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
