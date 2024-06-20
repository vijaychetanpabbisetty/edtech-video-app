import React from 'react';
import VideoList from '../components/VideoList';
import CreateVideoForm from '../components/CreateVideoForm';

const Home = () => {
  const userId = 'your_name'; // Replace with your actual user_id

  return (
    <div>
      <h1>Home</h1>
      <CreateVideoForm userId={userId} />
      <VideoList userId={userId} />
    </div>
  );
};

export default Home;
