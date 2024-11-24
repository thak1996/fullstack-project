import React, { useEffect, useState } from 'react';
import MessageDisplay from './components/MessageDisplay';
import AppController from './controller/AppController';
import Form from './components/Form'; // Importando o novo componente Form

const App = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState<{ message: string; details?: string }>({
        message: '',
    });

    useEffect(() => {
        const controller = new AppController();
        const fetchData = async () => {
            await controller.fetchMessage();
            setMessage(controller.getMessage());
            setError(controller.getError());
        };

        fetchData();
    }, []);

    return (
        <div>
            <Form /> {}
            <MessageDisplay message={message} error={error} />
        </div>
    );
};

export default App;
