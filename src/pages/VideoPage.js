import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoContext from '../context/VideoContext';
import VideoPlayer from '../components/VideoPlayer';
import CommentsSection from '../components/CommentsSection';
import { getSingleVideo, getComments } from '../api/api';

const VideoPage = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(VideoContext);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await getSingleVideo(id);
        dispatch({ type: 'SET_SELECTED_VIDEO', payload: response.data });
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await getComments(id);
        dispatch({ type: 'SET_COMMENTS', payload: response.data });
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchVideo();
    fetchComments();
  }, [dispatch, id]);

  return (
    <div>
      <VideoPlayer video={state.selectedVideo} />
      <CommentsSection comments={state.comments} videoId={id} />
    </div>
  );
};

export default VideoPage;
