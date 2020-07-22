import React, { useState } from 'react';
import AddVideoComponent from './AddVideo.component';

const AddVideo = () => {
  const [videoId, setVideoId] = useState<string | false>('');

  const getIdFromYoutubeURL = (videoUrl: string) => {
    // regex from: https://stackoverflow.com/a/8260383/1492782
    const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#]*).*/;
    const match = videoUrl.match(regExp);
    return match && match[1].length === 11 ? match[1] : false;
  };

  const addVideo = (videoUrl: string) => {
    const videoId = getIdFromYoutubeURL(videoUrl);
    setVideoId(videoId);
  };

  console.log(videoId);

  return <AddVideoComponent addVideo={addVideo} />;
};

export default AddVideo;
