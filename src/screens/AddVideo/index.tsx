import React, { useEffect, useState } from 'react';
import AddVideoComponent, { Level } from './AddVideo.component';
import { youTubeConfig } from '../../config';
import { AddVideoFormUrl } from './AddVideoFormik';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';
import fireApi from '../../services/firebase';

const AddVideo = () => {
  const [videoObject, setVideoObject] = useState<Object>({});
  const [videoIsDuplicate, setVideoIsDuplicate] = useState<boolean>(false);
  const userId = useSelector(userSelectors.userId);
  const axios = require('axios');
  const getVideoId = require('get-video-id');

  useEffect(() => {
    fireApi.addToDb('videos', videoObject);
  }, [videoObject]);

  const setVideoIsDuplicateToTrue = () => {
    setVideoIsDuplicate(true);
  };

  const setVideoIsDuplicateToFalse = () => {
    setVideoIsDuplicate(false);
  };

  const youTubeApiCall = (
    videoId: string,
    level: Level,
    rating: number | null
    //i thought about using an AddVideoUrl type here
    //as well, but I would have to create a new object
    //in the addVideo function: first I need to
    //manipulate the youTubeLink string and get its id.
    //Then i can can create a new object and pass it
    //to the apiCall. Given this circumstance, I
    //think that keeping the arguments as they are
    //makes the code more readable (we know immediately that
    //the formik values where manipulated before being
    //passed further). I am open to critism, though! :P
  ) => {
    axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'contentDetails, snippet',

          // part: 'snippet',
          id: videoId,
          key: youTubeConfig.apiKey,
        },
      })
      .then(function (response: any) {
        const videoObject = {
          id: response.data.items[0].id,
          title: response.data.items[0].snippet.title,
          imgDefault: response.data.items[0].snippet.thumbnails.default.url,
          imgMedium: response.data.items[0].snippet.thumbnails.medium.url,
          imgBig: response.data.items[0].snippet.thumbnails.high.url,
          duration: response.data.items[0].contentDetails.duration,
          level: level,
          rating: rating,
          user: userId,
        };
        setVideoObject(videoObject);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const addVideo = (video: AddVideoFormUrl) => {
    const videoId = getVideoId(video.youTubeLink).id;
    const videoCollection = fireApi.getCollectionFromDb('videos');
    videoCollection
      .where('id', '==', videoId)
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.empty) {
          setVideoIsDuplicateToFalse();
          youTubeApiCall(videoId, video.level, video.rating);
        } else {
          setVideoIsDuplicateToTrue();
        }
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
      });
  };

  return (
    <AddVideoComponent
      addVideo={addVideo}
      videoIsDuplicate={videoIsDuplicate}
      setVideoIsDuplicateToFalse={setVideoIsDuplicateToFalse}
    />
  );
};

export default AddVideo;
