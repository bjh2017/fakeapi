import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import _ from "lodash";
import { paginate } from "../utils/paginate";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [paginateData, setPaginateData] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  let pages = [];
  if (posts) pages = _.range(1, posts.length / pageSize + 1);

  const handlePagination = (page) => {
    const data = paginate(posts, pageSize, page);
    setPaginateData(data);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const data = paginate(json, pageSize, 1);
        setPaginateData(data);
        setPosts(json);
      });
  }, []);

  const columns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
    { path: "body", label: "Body" },
    { path: "userId", label: "User" },
  ];

  return (
    <>
      <h1>Posts page</h1>
      {posts ? (
        <>
          <Table columns={columns} data={paginateData} />
          <nav aria-label="...">
            <ul class="pagination">
              {pages.map((page) => (
                <li class="page-item">
                  <button
                    class="page-link"
                    onClick={() => handlePagination(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Posts;
