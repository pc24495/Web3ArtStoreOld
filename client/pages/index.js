import { useState, useEffect } from "react";
import axios from "../helpers/axiosConfig.js";

export default function Home() {
  const [state, setState] = useState("Hello");

  useEffect(() => {
    axios.get("/api/testRoute").then((res) => {
      setState(res.data.message);
    });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h1>{state}</h1>
    </div>
  );
}
