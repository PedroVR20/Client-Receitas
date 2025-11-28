import { Injectable } from '@angular/core';
import { environment  } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CriarReceitaRequest } from '../../models/receita-request.model';
import { ReceitaResponse } from '../../models/receita-response.model';


@Injectable({
  providedIn: 'root',
})
export class ReceitasApi {
  
   private readonly apiUrl = environment.apiUrl

   constructor(private http: HttpClient) {}

  listar(): Observable<ReceitaResponse[]> {
    return this.http.get<ReceitaResponse[]>(this.apiUrl);
  }

  criar(dto: CriarReceitaRequest): Observable<ReceitaResponse> {
    return this.http.post<ReceitaResponse>(this.apiUrl, dto);
  }

  deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscarPorNome(nome: string): Observable<ReceitaResponse[]> {
    return this.http.get<ReceitaResponse[]>(`${this.apiUrl}/buscar/${nome}`);
  }

  atualizar(id: string, dto: CriarReceitaRequest): Observable<ReceitaResponse> {
    return this.http.patch<ReceitaResponse>(`${this.apiUrl}/${id}`, dto);
  }
}