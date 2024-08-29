import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/loginResponse';
import { CadastroDeCursosModel } from '../models/cadastroCurso';

@Injectable({
  providedIn: 'root'
})
export class CadastrarCursosService {
  baseUrl = "localhost:3000";
  constructor(private http: HttpClient) {
  }

  cadastrarCurso(curso: CadastroDeCursosModel){
    return this.http.post<CadastroDeCursosModel>(`${this.baseUrl}/cadastrarCurso`, curso)
  }

}
