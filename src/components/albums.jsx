import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import _ from "lodash";
import Pagination from "./common/pagination";

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
  ];

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
