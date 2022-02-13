import { Veiculo } from 'src/app/veiculo/models/veiculo';

export class Cliente {
    id?: string;
    nome?: string;
    telefone?: string;
    cpf?: string;
    dataNascimento?: string;
    veiculos?: Veiculo[]
}