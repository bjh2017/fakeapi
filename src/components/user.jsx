import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./common/spinner";

const User = (props) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [todos, setTodos] = useState(null);
  const [albums, setAlbums] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => setUser(json));

    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      });

    fetch("https://jsonplaceholder.typicode.com/todos?userId=" + id)
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });

    fetch("https://jsonplaceholder.typicode.com/albums?userId=" + id)
      .then((response) => response.json())
      .then((json) => {
        setAlbums(json);
      });
  }, []);

  const handleCheck = (todo) => {
    const newTodos = [...todos];
    const index = todos.findIndex((t) => t.id === todo.id);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Profile</h1>
      {user ? (
        <div className="row">
          <div id="UserInfo" className="col-4">
            {/* info */}
            <div className="card mb-3">
              <div className="card-header">
                <h4>User Info</h4>
              </div>
              <ul className="list-group list-group-flush">
                {/* {Object.keys(user).map((key) => (
                <li className="list-group-item">{user[key] || key}</li>
              ))} */}
                <li className="list-group-item">{id}</li>
                <li className="list-group-item">{user.name}</li>
                <li className="list-group-item">{user.username}</li>
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">{user.phone}</li>
              </ul>
            </div>
            {/* todo list */}
            <div className="card">
              <div className="card-header">
                <h4>Todo List</h4>
              </div>
              <ul className="list-group list-group-flush">
                {todos.map((todo) => (
                  <li key={todo.id} className="list-group-item">
                    <input
                      type="checkbox"
                      className="form-check-input me-3"
                      checked={todo.completed}
                      onClick={() => handleCheck(todo)}
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      className={
                        todo.completed && "text-decoration-line-through"
                      }
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCheck(todo)}
                    >
                      {todo.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="userPosts" className="col-4">
            <h4>Posts</h4>
            {posts &&
              posts.map((post) => (
                <div key={post.id} className="card mb-3">
                  <img
                    src="https://picsum.photos/200/100"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <a href="#" className="btn btn-primary">
                      View Post
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-4">
            <div className="card mb-3">
              <div className="card-header">
                <h4>Albums</h4>
              </div>
              <ul className="list-group list-group-flush">
                {albums.map((album) => (
                  <li className="list-group-item">{album.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default User;
