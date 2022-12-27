import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = (values, setLoading) => {
    setTimeout(() => {
      const loginUser = users.find(
        (u) => u.username === values.username && u.password === values.password
      );

      if (loginUser) {
        setUser(loginUser);
        localStorage.setItem("user", JSON.stringify(loginUser));
        navigate("/");
      } else {
        toast.error("Username or password is invlaid.", { theme: "colored" });
        setLoading(false);
      }
    }, 2000);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

const users = [
  { username: "bashar", password: "123456" },
  { username: "rafah", password: "123456" },
];
