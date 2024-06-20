// context/VideoReducer.js

const initialState = {
  videos: [],
  selectedVideo: null,
  comments: [],
};

const VideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return { ...state, videos: action.payload };
    case 'SET_SELECTED_VIDEO':
      return { ...state, selectedVideo: action.payload };
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default VideoReducer;
