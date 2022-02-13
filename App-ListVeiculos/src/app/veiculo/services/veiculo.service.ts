import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Veiculo } from "../models/veiculo";

@Injectable()

export class VeiculoService {

    baseUrl = `${environment.mainUrlAPI}veiculo`;

    constructor(private http: HttpClient) { }

    obterTodos(): Observable<Veiculo[]> {
        return this.http.get<Veiculo[]>(this.baseUrl);
    }
}