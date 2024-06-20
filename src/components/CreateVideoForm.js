// src/components/CreateVideoForm.js

import React, { useState } from 'react';
import { createVideo } from '../api/api'; // Assuming axios is imported in api.js

const CreateVideoForm = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Assuming axios is used within createVideo function in api.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createVideo({ title, description, url, user_id: userId });
      console.log('Video created successfully:', response);
      setTitle('');
      setDescription('');
      setUrl('');
      alert('Video created successfully!');
    } catch (error) {
      console.error('Error creating video:', error);
      if (error.response && error.response.status === 422) {
        const errorDetail = error.response.data.detail[0];
        setErrorMessage(`Failed to create video: ${errorDetail}`);
      } else {
        setErrorMessage('Failed to create video. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Video</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Video</button>
    </form>
  );
};

export default CreateVideoForm;
