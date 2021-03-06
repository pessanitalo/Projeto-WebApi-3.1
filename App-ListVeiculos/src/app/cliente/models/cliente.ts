import { Veiculo } from 'src/app/veiculo/models/veiculo';

export interface Cliente {
    id: string;
    nome: string;
    telefone: string;
    cpf: string;
    dataNascimento: number;
    veiculos: Veiculo[]
}