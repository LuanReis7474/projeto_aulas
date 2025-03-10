//import api from './apiService';

export const getDisciplines = async () => {
    //const response = await api.get('/users');
    const response = [
        {
            "nome": "Interpretação de Texto",
            "id": 1,
            "aulas": {
                "quantidade": 119,
                "tempo": "10h22m"
            },
            "exercicios": {
                "quantidade": 71,
                "tempo": "7h12m"
            },
            "materias": {
                "quantidade": 53,
                "tempo": "16h03m"
            },
            "competencias": [
                {
                    "nome": "Competência 01: Palavras, Imagem e Vida Social",
                    "id": 1,
                    "aulas": { "quantidade": 52, "tempo": "4h52m" },
                    "exercicios": { "quantidade": 28, "tempo": "2h28m" },
                    "materias": { "quantidade": 28, "tempo": "9h43m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 01",
                        "aulas": [
                            { "id": 1, "nome": "Aula 1" },
                            { "id": 2, "nome": "Aula 2" }
                        ]
                    }
                },
                {
                    "nome": "Competência 06: Texto - Contexto e Função",
                    "id": 2,
                    "aulas": { "quantidade": 10, "tempo": "42m" },
                    "exercicios": { "quantidade": 24, "tempo": "2h36m" },
                    "materias": { "quantidade": 15, "tempo": "2h39m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 06",
                        "aulas": [
                            { "id": 3, "nome": "Aula 1" },
                            { "id": 4, "nome": "Aula 2" }
                        ]
                    }
                },
                {
                    "nome": "Competência 07: Opiniões e Pontos de Vista",
                    "id": 3,
                    "aulas": { "quantidade": 8, "tempo": "1h18m" },
                    "exercicios": { "quantidade": 13, "tempo": "1h01m" },
                    "materias": { "quantidade": 9, "tempo": "3h01m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 06",
                        "aulas": [
                            { "id": 5, "nome": "Aula 1" },
                            { "id": 6, "nome": "Aula 2" },
                            { "id": 7, "nome": "Aula 3" },
                            { "id": 8, "nome": "Aula 4" },
                        ]
                    }
                },
                {
                    "nome": "Competência 08: Diversidade Linguística",
                    "id": 4,
                    "aulas": { "quantidade": 2, "tempo": "16m" },
                    "exercicios": { "quantidade": 10, "tempo": "28m" },
                    "materias": { "quantidade": 1, "tempo": "12m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 06",
                        "aulas": [
                            { "id": 9, "nome": "Aula 1" },
                            { "id": 10, "nome": "Aula 2" },
                            { "id": 11, "nome": "Aula 3" },
                        ]
                    }
                }
            ]
        },
        {
            "nome": "Gramática",
            "id": 2,
            "aulas": {
                "quantidade": 86,
                "tempo": "14h18m"
            },
            "exercicios": {
                "quantidade": 27,
                "tempo": "10h45m"
            },
            "materias": {
                "quantidade": 10,
                "tempo": "10h10m"
            },
            "competencias": [
                {
                    "nome": "Fonologia",
                    "id": 5,
                    "aulas": { "quantidade": 7, "tempo": "1h16m" },
                    "exercicios": { "quantidade": 6, "tempo": "12m" },
                    "materias": { "quantidade": 3, "tempo": "21m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 06",
                        "aulas": [
                            { "id": 12, "nome": "Aula 1" },
                        ]
                    }
                },
                {
                    "nome": "Morfologia",
                    "id": 6,
                    "aulas": { "quantidade": 54, "tempo": "9h45m" },
                    "exercicios": { "quantidade": 6, "tempo": "45m" },
                    "materias": { "quantidade": 9, "tempo": "48m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 06",
                        "aulas": [
                            { "id": 13, "nome": "Aula 1" },
                            { "id": 14, "nome": "Aula 2" },
                        ]
                    }

                },
                {
                    "nome": "Classes de Palavras",
                    "id": 7,
                    "aulas": { "quantidade": 27, "tempo": "1h05m" },
                    "exercicios": { "quantidade": 1, "tempo": "6m" },
                    "materias": { "quantidade": 1, "tempo": "6m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 06",
                        "aulas": [
                            { "id": 15, "nome": "Aula 1" },
                            { "id": 16, "nome": "Aula 2" },
                        ]
                    }
                },
                {
                    "nome": "Sintaxe",
                    "id": 8,
                    "aulas": { "quantidade": 16, "tempo": "1h50m" },
                    "exercicios": { "quantidade": 8, "tempo": "29m" },
                    "materias": { "quantidade": 6, "tempo": "27m" },
                    "lista_aulas": {
                        "titulo": "Aulas da Competência 06",
                        "aulas": [
                            { "id": 17, "nome": "Aula 1" },
                        ]
                    }

                }
            ]
        }
    ];

    return response;
};