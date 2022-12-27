import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";

const Login = () => {
  const { user, login } = useContext(AuthContext);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login(values, setLoading);
  };

  if (user) return <Navigate to="/" />;

  return (
    <main className="form-signin w-100 m-auto text-center">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="username"
            name="username"
            value={values.username}
            onChange={handleInput}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleInput}
          />
          <label htmlFor="password">Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          disabled={loading}
        >
          {loading && (
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </main>
  );
};

export default Login;
