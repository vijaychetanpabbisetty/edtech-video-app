import axios from 'axios';

const API_URL = 'https://take-home-assessment-423502.uc.r.appspot.com/api';

export const getVideos = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/videos`, { params: { user_id: userId } });
    return response.data; // Assuming response.data is an array of video objects
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};


export const createVideo = async (videoData) => {
  try {
    const response = await axios.post('/api/videos', videoData);
    return response.data; // Assuming the server responds with the created video data
  } catch (error) {
    throw error; // Let the caller handle the error
  }
};

export const getSingleVideo = async (videoId) => {
  try {
    return await axios.get(`${API_URL}/videos/single`, { params: { id: videoId } });
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getComments = async (videoId) => {
  try {
    return await axios.get(`${API_URL}/videos/comments`, { params: { video_id: videoId } });
  } catch (error) {
    handleAxiosError(error);
  }
};

export const postComment = async (videoId, comment) => {
  try {
    return await axios.post(`${API_URL}/videos/comments`, { video_id: videoId, ...comment });
  } catch (error) {
    handleAxiosError(error);
  }
};

const handleAxiosError = (error) => {
  if (error.response) {
    console.error('Server responded with error:', error.response.status, error.response.data);
  } else if (error.request) {
    console.error('No response received:', error.request);
  } else {
    console.error('Error setting up request:', error.message);
  }
  throw error;
};
