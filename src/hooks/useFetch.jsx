import { useEffect, useState } from "react";

const useFetch = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com${path}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return { data, setData };
};

export default useFetch;
