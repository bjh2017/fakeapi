import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import Pagination from "./common/pagination";
import _ from "lodash";

const Todos = () => {
  const [todos, setTodos] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const columns = [
    { path: "id", label: "ID" },
    { path: "title", label: "Title" },
    { path: "completed", label: "Completed?" },
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
    const newData = todos.filter((todo) => todo.id !== item.id);
    setTodos(newData);
  };

  return (
    <>
      <h1>Todos Page</h1>
      {todos ? (
        <>
          {/* <Table columns={columns} data={paginatedData} /> */}
          <Pagination setPaginatedData={setPaginatedData} data={todos} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Todos;
