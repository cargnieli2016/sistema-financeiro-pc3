import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Produto } from './produto.model';

import { Injectable } from "@angular/core";

//
const API = environment.urlApi;
const PRODUTOS = API + '/produto';

//Dizendo que o service é injetavel e provido diretamente no root
@Injectable({
  providedIn: 'root'
})

export class ProdutoService{

  constructor(
    private httpCliente: HttpClient
  ){}

selectAll(){
  return this.httpCliente.get<Produto[]>(PRODUTOS);
}



}
