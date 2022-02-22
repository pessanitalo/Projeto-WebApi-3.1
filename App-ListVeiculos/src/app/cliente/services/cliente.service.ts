import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Cliente } from "../models/cliente";

@Injectable()

export class ClienteService{

    baseUrl = `${environment.mainUrlAPI}cliente`;
    
    constructor(private http: HttpClient){}

    obterTodos(): Observable<Cliente[]>{
        return this.http.get<Cliente[]>(this.baseUrl);
    }

    addCliente(cliente : Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.baseUrl,cliente);
    }
}