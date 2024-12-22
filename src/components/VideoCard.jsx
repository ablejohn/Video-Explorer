import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card shadow-sm border-0">
      <img
        src={video.thumbnail}
        className="card-img-top rounded"
        alt={video.title}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{video.title}</h5>
        <p className="card-text text-muted">{video.duration}</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/video/${video.id}`} className="btn btn-primary btn-sm">
            Watch Now
          </Link>
          <button
            className={`btn btn-sm ${
              liked ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setLiked(!liked)}
          >
            {liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
