import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Participante } from './participante.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  private URL = 'http://localhost:3000/api'

  constructor(private http : HttpClient) { }

  saveParticipante(participante : Participante) {
    return this.http.post(`${this.URL}/participantes`, participante);
  }

  getAllParticipantes() : Observable<Participante[]> {
    return this.http.get<Participante[]>(`${this.URL}/participantes`)
  }

  getOneParticipante(id : string) : Observable<Participante> {
    return this.http.get<Participante>(`${this.URL}/participantes/${id}`);
  }

  getUsuario(email : string) : Observable<Participante> {
    return this.http.get<Participante[]>(`${this.URL}/participantes/login/${email}`).pipe(
      map(participantes => participantes[0])
    );
  }

  addEvento(email : string | null, nomEvento : string, area : string) {
    return this.http.post(`${this.URL}/participantes/nvoEvento`, { email, nomEvento, area });
  }

 

  
}
