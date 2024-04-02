import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParticipanteService } from './participante.service';
import { Participante } from '../models/participanteModel';
import { switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://tu-api.com/auth'; // URL de tu servicio de autenticación

  constructor(
    private http: HttpClient,
    private participanteService: ParticipanteService
  ) { }

  /*login(Correo: string, Password: string): Observable<any> {
    // Obtener el participante por correo
    return this.participanteService.getParticipanteByEmail(Correo).pipe(
      switchMap((participante: Participante) => {
        // Verificar si el participante existe y la contraseña coincide
        if (participante && participante.Password === Password) {
          // Si las credenciales son válidas, realizar el inicio de sesión
          return this.http.post<any>(`${this.URL}/login`, { Correo, Password });
        } else {
          // Si las credenciales no son válidas, lanzar un error
          return throwError('Correo o contraseña incorrectos');
        }
      })
    );
  }
  */
}
