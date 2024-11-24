import axios from 'axios';

const apiService = {
    fetchMessage: async () => {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
        console.log('Tentando conectar em:', apiUrl);

        const response = await axios.get(apiUrl, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return response.data.message;
    },
};

export default apiService;
