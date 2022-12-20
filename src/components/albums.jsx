import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import Pagination from "./common/pagination";
import _ from "lodash";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, []);

  const columns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
    { path: "userId", label: "User" },
    {
      label: "Actions",
      content: (item) => (
        <button className="btn btn-danger" onClick={() => handleDelete(item)}>
          Delete
        </button>
      ),
    },
  ];

  const handleDelete = (item) => {
    const newData = albums.filter((album) => album.id !== item.id);
    setAlbums(newData);
  };

  return (
    <>
      <h1>Albums page</h1>
      {albums ? (
        <>
          <Table columns={columns} data={paginatedData} />
          <Pagination setPaginatedData={setPaginatedData} data={albums} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Albums;
