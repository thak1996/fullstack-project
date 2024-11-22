import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`).then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return <div>{message}</div>;
};

export default App;
