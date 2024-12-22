import React from "react";

const Pagination = ({
  totalVideos,
  videosPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalVideos / videosPerPage);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {[...Array(totalPages).keys()].map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page + 1 ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
