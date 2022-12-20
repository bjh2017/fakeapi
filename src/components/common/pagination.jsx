import _ from "lodash";
import { paginate } from "../../utils/paginate";
import { useEffect, useState } from "react";

const Pagination = ({ data, setPaginatedData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  let pagesCount = Math.ceil(data.length / pageSize);
  let pages;
  if (data) pages = _.range(1, pagesCount + 1);

  useEffect(() => {
    handlePagination(currentPage);
  }, [data]);

  const handlePagination = (page, items = data) => {
    const elements = paginate(items, pageSize, page);
    setCurrentPage(page);
    setPaginatedData(elements);
  };

  const handleNextPrevious = (page) => {
    setCurrentPage(page);
    handlePagination(page);
  };

  if (pageSize >= data.length) return null;
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            className={currentPage < 2 ? "page-link disabled" : "page-link"}
            style={{ cursor: "pointer" }}
            onClick={() => handleNextPrevious(currentPage - 1)}
          >
            Previous
          </a>
        </li>
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
        <li className="page-item">
          <a
            className={
              currentPage === pagesCount ? "page-link disabled" : "page-link"
            }
            style={{ cursor: "pointer" }}
            onClick={() => handleNextPrevious(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
