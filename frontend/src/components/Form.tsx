import React, { useState } from 'react';

const Form = () => {
    const [id, setId] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        if (!id || !origem || !destino) {
            setError('Todos os campos são obrigatórios.');
            return;
        }

        // Aqui você pode adicionar a lógica para enviar os dados
        console.log('Dados enviados:', { id, origem, destino });

        // Limpar os campos após o envio
        setId('');
        setOrigem('');
        setDestino('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
            <div>
                <label>ID:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Origem:</label>
                <input
                    type="text"
                    value={origem}
                    onChange={(e) => setOrigem(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Destino:</label>
                <input
                    type="text"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    required
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
