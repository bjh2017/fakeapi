import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const columns = [
    { path: "id", label: "ID" },
    { path: "name", label: "Fullname" },
    { path: "username", label: "User" },
    { path: "email", label: "E-mail" },
    { path: "phone", label: "Mobile" },
    {
      label: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-danger me-2"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
          <Link className="btn btn-primary " to={`/users/${item.id}`}>
            View
          </Link>
        </>
      ),
    },
  ];

  const handleDelete = (item) => {
    const newData = users.filter((user) => user.id !== item.id);
    setUsers(newData);
  };

  return (
    <>
      <h1>Users page</h1>
      {users ? (
        <>
          <Table columns={columns} data={paginatedData} />
          <Pagination setPaginatedData={setPaginatedData} data={users} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Users;
