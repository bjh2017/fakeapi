import { useState } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";
import UserForm from "./userForm";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";
import Row from "./row";

const Users = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);

  const { data: users, setData: setUsers } = useFetch("/users");

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
            className="btn btn-danger m-2"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => setSelectedItem(item)}
          >
            Edit
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
    toast.warning("User is deleted successfully...", { theme: "colored" });
  };

  return (
    <>
      <Row title="Users Page">
        {users ? (
          <>
            <Table columns={columns} data={paginatedData} />
            <Pagination setPaginatedData={setPaginatedData} data={users} />
          </>
        ) : (
          <Spinner />
        )}

        <UserForm data={users} setData={setUsers} selectedItem={selectedItem} />
      </Row>
    </>
  );
};

export default Users;
