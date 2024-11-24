import apiService from '../services/apiService';
import { MessageModel } from '../models/MessageModel';

class AppController {
    private message: string = '';
    private error: MessageModel = { message: '' };

    public async fetchMessage() {
        try {
            const msg = await apiService.fetchMessage();
            this.message = msg;
        } catch (error: unknown) {
            console.error('Erro detalhado:', error);
            this.error = {
                message: 'Erro na conexão',
                details: `Erro ao conectar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
            };
        }
    }

    public getMessage() {
        return this.message;
    }

    public getError() {
        return this.error;
    }
}

export default AppController;
