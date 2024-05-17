import React from "react";

interface IYouTubeVideo {
  videoId: string;
  title: string;
}
const YouTubeVideo = ({ videoId, title }: IYouTubeVideo) => {
  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full aspect-video opacity-70"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
