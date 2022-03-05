import { ClienteService } from './cliente.service';
import { Injectable } from "@angular/core";
import { Cliente } from '../models/cliente';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteResolve implements Resolve<Cliente>{

    constructor(private clienteService: ClienteService) {

    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.clienteService.obterPorId(route.params['id']);
    }
}
