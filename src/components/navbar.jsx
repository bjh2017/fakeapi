import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/authContext";

const Navbar = () => {
  const { pathname } = useLocation();

  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  const links = [
    { to: "/", label: "Home" },
    { to: "/users", label: "Users" },
    { to: "/posts", label: "Posts" },
    { to: "/albums", label: "Albums" },
    { to: "/todos", label: "ToDo List" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Tutorials
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link) => (
              <li className="nav-item" key={link.label}>
                <Link
                  className={
                    pathname === link.to ? "nav-link active" : "nav-link"
                  }
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <Link className="nav-link">{user.username}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
