//import api from './apiService';

export const getDisciplines = async () => {
    //const response = await api.get('/users');
    const response = [{
        "nome": "Interpreteção de texto",
        "id": 1,
        "aulas": {
            "quantidade": 75,
            "horario": "5h22m"
        },
        "exercicios": {
            "quantidade": 64,
            "horario": "55m"
        },
        "materias": {
            "quantidade": 12,
            "horario": "10h20m"
        }
    },
    {
        "nome": "Gramatica",
        "id": 2,
        "aulas": {
            "quantidade": 54,
            "horario": "8h22m"
        },
        "exercicios": {
            "quantidade": 22,
            "horario": "12m"
        },
        "materias": {
            "quantidade": 1,
            "horario": "7h20m"
        }
    }]

    return response;
};