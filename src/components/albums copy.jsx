import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import _ from "lodash";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  let pages;
  if (albums)
    // pages = posts.length / pageSize = 10
    // convert pages from count to array
    pages = _.range(1, Math.ceil(albums.length / pageSize) + 1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        setAlbums(json);
        handlePagination(currentPage, json);
      });
  }, []);

  const columns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
    { path: "userId", label: "User" },
  ];

  const handlePagination = (page, items = albums) => {
    // items => data
    // pageNumber => page
    // pageSize = 10
    // startIndex
    const startIndex = (page - 1) * pageSize;
    const data = _(items).slice(startIndex).take(pageSize).value();
    setCurrentPage(page);
    setPaginatedData(data);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    handlePagination(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    handlePagination(currentPage - 1);
  };

  return (
    <>
      <h1>Posts page</h1>
      {albums ? (
        <>
          <Table columns={columns} data={paginatedData} />
          <nav>
            <ul className="pagination">
              {/* previous button */}
              <li className="page-item">
                <a
                  className={
                    currentPage < 2 ? "page-link disabled" : "page-link"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handlePrevious}
                >
                  Previous
                </a>
              </li>
              {/* previous button */}

              {pages.map((page) => (
                <li key={page} className="page-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className={
                      page === currentPage ? "page-link active" : "page-link"
                    }
                    onClick={() => handlePagination(page)}
                  >
                    {page}
                  </a>
                </li>
              ))}

              {/* next button */}
              <li className="page-item">
                <a
                  className={
                    currentPage === Math.ceil(albums.length / pageSize)
                      ? "page-link disabled"
                      : "page-link"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                >
                  Next
                </a>
              </li>
              {/* next button */}
            </ul>
          </nav>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Albums;
