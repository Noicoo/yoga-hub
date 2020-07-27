import React, { useState } from 'react';
import AddVideoComponent from './AddVideo.component';
import { youTubeConfig } from '../../config';

const AddVideo = () => {
  const [videoObject, setVideoObject] = useState<Object>({});

  const axios = require('axios');
  const getVideoId = require('get-video-id');

  const youTubeApiCall = (
    videoId: string,
    level: string | boolean,
    rating: number | null
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
        //just extract what I need and update the local state
        //then i will ad a useEffect hook that will listen for
        //the videoObject change in the local state. whenever I have a new
        //valid video added (no error and no duplicate - check id), it will upload the video
        //to the firestore backend (list of videos)
        const videoObject = {
          id: response.data.items[0].id,
          title: response.data.items[0].snippet.title,
          imgDefault: response.data.items[0].snippet.thumbnails.default.url,
          imgMedium: response.data.items[0].snippet.thumbnails.medium.url,
          imgBig: response.data.items[0].snippet.thumbnails.high.url,
          duration: response.data.items[0].contentDetails.duration,
          level: level,
          rating: rating,
        };
        setVideoObject(videoObject);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const addVideo = (
    videoUrl: string,
    level: string | boolean,
    rating: number | null
  ) => {
    const videoId = getVideoId(videoUrl).id;
    youTubeApiCall(videoId, level, rating);
  };

  console.log(videoObject);

  return <AddVideoComponent addVideo={addVideo} />;
};

export default AddVideo;
