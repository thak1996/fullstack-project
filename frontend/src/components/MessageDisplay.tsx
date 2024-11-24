import React from 'react';

interface MessageDisplayProps {
    message: string;
    error: { message: string; details?: string };
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, error }) => {
    return (
        <div style={{ padding: '20px' }}>
            {error.message ? (
                <div style={{ color: 'red' }}>
                    <h3>Erro de conexão</h3>
                    <p>{error.message}</p>
                    {error.details && (
                        <pre
                            style={{
                                background: '#f8f8f8',
                                padding: '10px',
                                borderRadius: '4px',
                            }}
                        >
                            {error.details}
                        </pre>
                    )}
                </div>
            ) : (
                <div>{message || 'Aguarde, conectando ao servidor...'}</div>
            )}
        </div>
    );
};

export default MessageDisplay;
