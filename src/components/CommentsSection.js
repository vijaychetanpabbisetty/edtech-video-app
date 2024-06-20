import React, { useState } from 'react';
import { postComment } from '../api/api';

const CommentsSection = ({ comments, videoId }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postComment(videoId, { text: newComment, user_id: 'test_user' }); // Replace 'test_user' with actual user ID
      comments.push(response.data);
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentsSection;
