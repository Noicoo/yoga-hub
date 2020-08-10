import React, { useState } from 'react';
import AddVideoComponent from './AddVideo.component';
import { AddVideoFormUrl } from './AddVideoFormik';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';
import fireApi from '../../services/firebase';

const AddVideo = () => {
  const [videoIsDuplicate, setVideoIsDuplicate] = useState<boolean>(false);
  const [videoAdded, setVideoAdded] = useState<boolean>(false);
  const userId = useSelector(userSelectors.userId);
  const getVideoId = require('get-video-id');

  const clearMessage = () => {
    setVideoAdded(false);
    setVideoIsDuplicate(false);
  };

  const setVideoIsDuplicateToTrue = () => {
    setVideoIsDuplicate(true);
  };

  const setVideoIsDuplicateToFalse = () => {
    setVideoIsDuplicate(false);
  };

  const addVideo = (video: AddVideoFormUrl) => {
    const videoId = getVideoId(video.youTubeLink).id;
    fireApi.checkIfVideoExists(videoId).then((result) => {
      if (result) {
        setVideoIsDuplicateToFalse();
        setVideoAdded(true);
        fireApi.addVideoToDb(videoId, video, userId);
      } else {
        setVideoIsDuplicateToTrue();
      }
    });
  };

  return (
    <AddVideoComponent
      addVideo={addVideo}
      videoIsDuplicate={videoIsDuplicate}
      setVideoIsDuplicateToFalse={setVideoIsDuplicateToFalse}
      videoAdded={videoAdded}
      clearMessage={clearMessage}
    />
  );
};

export default AddVideo;
