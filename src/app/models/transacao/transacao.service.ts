import { environment } from './../../../environments/environment';
import { Transacao } from './transacao.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


const API = environment.urlApi
const RECURSO = API+ '/transacao'; // Juntando API com transacao

@Injectable({
  providedIn: 'root'
})
export class TransacaoService{

  constructor(
    private httpClient: HttpClient // Pede ele injetado
  ){}

selectAll(){
  return this.httpClient.get<Transacao[]>(RECURSO); // Solicitacao get ao API, que retorna uma transacao list. () método URL
}

selectById(id: number){
    return this.httpClient.get<Transacao[]>(RECURSO+`/${id}`);
}

insert(obj: Transacao){
  return this.httpClient.post<Transacao>(RECURSO, obj );
}

update(obj: Transacao){
  return this.httpClient.put<Transacao>(RECURSO+`/${obj.id}`, obj );
}

delete(id: number){
  return this.httpClient.delete<Transacao>(RECURSO+`/${id}`);
}
}
