import React, { useState } from 'react';
import AddVideoComponent, { Level } from './AddVideo.component';
import { youTubeConfig } from '../../config';
import { AddVideoFormUrl } from './AddVideoFormik';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';

const AddVideo = () => {
  const [videoObject, setVideoObject] = useState<Object>({});
  const userId = useSelector(userSelectors.userId);
  const axios = require('axios');
  const getVideoId = require('get-video-id');

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
    youTubeApiCall(videoId, video.level, video.rating);
  };

  console.log(videoObject);

  return <AddVideoComponent addVideo={addVideo} />;
};

export default AddVideo;
