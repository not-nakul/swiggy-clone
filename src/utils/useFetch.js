import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();

  console.log(url);

  async function getData() {
    const response = await fetch(url);
    if (!response.ok) {
      return new Error("Something unexpected happened!");
    }

    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return data;
}

export default useFetch;
