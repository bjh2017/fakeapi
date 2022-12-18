import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";

const Users = () => {
  const [users, setUsers] = useState(null);

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
  ];

  return (
    <>
      <h1>Users page</h1>
      {users ? <Table columns={columns} data={users} /> : <Spinner />}
    </>
  );
};

export default Users;
