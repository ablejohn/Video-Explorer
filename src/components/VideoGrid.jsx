import React from "react";
import VideoCard from "./VideoCard";

const VideoGrid = ({ videos }) => (
  <div className="row g-4">
    {videos.map((video) => (
      <div className="col-md-4" key={video.id}>
        <VideoCard video={video} />
      </div>
    ))}
  </div>
);

export default VideoGrid;
