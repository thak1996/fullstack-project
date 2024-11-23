import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState<{ message: string; details?: string }>({
        message: ""
    });

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
        
        console.log('Tentando conectar em:', apiUrl);

        axios
            .get(apiUrl, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                console.log('Resposta recebida:', response.data);
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("Erro detalhado:", error);
                setError({
                    message: "Erro na conexão",
                    details: `Erro ao conectar com ${apiUrl}: ${error.message}`
                });
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            {error.message ? (
                <div style={{ color: "red" }}>
                    <h3>Erro de conexão</h3>
                    <p>{error.message}</p>
                    {error.details && (
                        <pre style={{
                            background: "#f8f8f8",
                            padding: "10px",
                            borderRadius: "4px"
                        }}>
                            {error.details}
                        </pre>
                    )}
                </div>
            ) : (
                <div>{message || "Aguarde, conectando ao servidor..."}</div>
            )}
        </div>
    );
};

export default App;
