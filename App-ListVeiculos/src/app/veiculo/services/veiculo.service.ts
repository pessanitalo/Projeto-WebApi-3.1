import { Veiculo } from './../models/veiculo';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";


@Injectable()

export class VeiculoService {

    baseUrl = `${environment.mainUrlAPI}veiculo`;

    constructor(private http: HttpClient) { }

    obterTodos(): Observable<Veiculo[]> {
        return this.http.get<Veiculo[]>(this.baseUrl);
    }

   createVeiculo(veiculo : Veiculo): Observable<Veiculo> {
        return this.http.post<Veiculo>(this.baseUrl,veiculo);
    }

    obterPorId(id: number): Observable<Veiculo> {
        return this.http.get<Veiculo>(`${this.baseUrl}${id}`);
    }
}