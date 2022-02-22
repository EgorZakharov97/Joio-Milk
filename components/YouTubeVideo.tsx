import React from 'react';
import YouTube from 'react-youtube';

function YouTubeVideo({ height, width, videoId, autoplay, className }: {height: string, width: string, videoId: string, autoplay: boolean,  className: string }) {
  
  const opts = {
    height: height ? height : '390',
    width: width ? width : '640',
    autoplay: autoplay ? 0 : 1,
  }

  return (
    <YouTube
      className={className}
      opts={opts}
      videoId={ videoId ? videoId : 'dQw4w9WgXcQ' }
    />
  )
}

export default YouTubeVideo