import { youTubeConfig } from '../config';

interface YouTubeInfoData {
  id: string;
  title: string;
  imgDefault: string;
  imgMedium: string;
  imgBig: string;
  duration: string;
}

const axios = require('axios');
const youTubeApi = {
  getVideoInfo: (videoId: string): Promise<YouTubeInfoData> => {
    return axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'contentDetails, snippet',
          id: videoId,
          key: youTubeConfig.apiKey,
        },
      })
      .then((response: any) => ({
        id: response.data.items[0].id,
        title: response.data.items[0].snippet.title,
        imgDefault: response.data.items[0].snippet.thumbnails.default.url,
        imgMedium: response.data.items[0].snippet.thumbnails.medium.url,
        imgBig: response.data.items[0].snippet.thumbnails.high.url,
        duration: response.data.items[0].contentDetails.duration,
      }))
      .catch(function (error: any) {
        console.log(error);
      });
  },
};

export default youTubeApi;
