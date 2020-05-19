import { useState, useEffect } from "react";

export default function useApiImages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch(
        "https://api.jonathanczyzyk.com/api/v1/images/small",
        {
          headers: {
            "x-api-key": "api-key-d35ba445-9f45-430e-881c-944df0cf0f8e",
          },
        }
      );
      res = await res.json();
      setData(res);
    }
    fetchData();
  }, []);

  return [data, setData];
}
