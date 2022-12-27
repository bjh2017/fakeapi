import { useContext } from "react";
import AuthContext from "../context/authContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <>
      <h1>Home page</h1>
      <h2>user: {user.username}</h2>
    </>
  );
};

export default Home;
