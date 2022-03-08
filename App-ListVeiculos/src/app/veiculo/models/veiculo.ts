import { Cliente } from './../../cliente/models/cliente';

export class Veiculo {
    id!: number;
    marca!: string;
    modelo!: string;
    cor!: string;
    placa!: string;
    quilometragem!: number;
    anoFabricacao!: string;
    clienteId!: number;
    Cliente!: Cliente;
}
