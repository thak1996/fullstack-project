import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}`)
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                setError("Erro ao conectar com o servidor");
                console.error("Erro:", error);
            });
    }, []);

    if (error) {
        return <div style={{ color: "red" }}>{error}</div>;
    }

    return <div>{message || "Carregando..."}</div>;
};

export default App;
