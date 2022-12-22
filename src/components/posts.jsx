import { useState } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import Pagination from "./common/pagination";
import _ from "lodash";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  const { data: posts, setData: setPosts } = useFetch("/posts");
  const [paginatedData, setPaginatedData] = useState([]);

  const columns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
    { path: "body", label: "Body" },
    { path: "userId", label: "User" },
    {
      label: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-danger m-2"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
          <Link className="btn btn-primary" to={`/posts/${item.id}`}>
            View Post
          </Link>
        </>
      ),
    },
  ];

  const handleDelete = (item) => {
    const newData = posts.filter((post) => post.id !== item.id);
    setPosts(newData);
  };

  return (
    <>
      <h1>Posts page</h1>
      {posts ? (
        <>
          <Table columns={columns} data={paginatedData} />
          <Pagination setPaginatedData={setPaginatedData} data={posts} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Posts;
