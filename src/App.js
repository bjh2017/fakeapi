import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Posts from "./components/posts";
import Albums from "./components/albums";
import Users from "./components/users";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import User from "./components/user";
import Post from "./components/post";
import { ToastContainer } from "react-toastify";
import Login from "./components/login";
import { useState } from "react";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();

  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/todos" element={<Todos />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
          <ToastContainer />
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
