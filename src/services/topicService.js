import api from './apiService';

export const getUsers = async () => {
    //const response = await api.get('/users');
    const response = {
        "Interpretação de texto": {
            "aulas": 1222,
            "horario": '10h22m',
        },
        "Gramática": {
            "aulas": 86,
            "horario": '5h22m'
        }
    }

    return response.data;
};