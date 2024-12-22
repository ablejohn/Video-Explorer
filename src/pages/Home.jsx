import React, { useState } from "react";
import VideoGrid from "../components/VideoGrid";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import mockVideos from "../mockVideos.json";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 4; // Display 4 videos per page

  // Filter videos based on the search term
  const filteredVideos = mockVideos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the indices for pagination
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  return (
    <div className="container mt-4">
      {/* Search bar to filter videos */}
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Grid layout to display videos */}
      <VideoGrid videos={currentVideos} />

      {/* Pagination component */}
      <Pagination
        totalVideos={filteredVideos.length}
        videosPerPage={videosPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
