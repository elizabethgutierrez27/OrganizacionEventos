import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Correo: string = '';
  Password: string = '';
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /*onSubmit() {
    this.authService.login(this.Correo, this.Password).subscribe(
      () => {
        // Redirige a la página principal después de iniciar sesión
        this.router.navigate(['/']);
      },
      err => {
        this.error = err; // Maneja el error mostrándolo en la interfaz de usuario
        console.log(err);
      }
    );
  }
  */

}
