import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Posts from "./components/posts";
import Albums from "./components/albums";
import Users from "./components/users";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
