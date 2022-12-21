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

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
