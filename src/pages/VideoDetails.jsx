import React from "react";
import { useParams } from "react-router-dom";
import mockVideos from "../assets/mockVideos.json";

const VideoDetails = () => {
  const { id } = useParams();
  const video = mockVideos.find((v) => v.id === parseInt(id));

  if (!video) {
    return <div className="container mt-4">Video not found.</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{video.title}</h1>
      <video controls className="w-100 rounded mb-4 shadow">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-muted">{video.description}</p>
    </div>
  );
};

export default VideoDetails;
