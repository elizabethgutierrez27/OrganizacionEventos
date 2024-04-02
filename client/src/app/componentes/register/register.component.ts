import { Component, OnInit, ElementRef } from '@angular/core';
import { ParticipanteService } from '../../services/participante.service';
import { Participante } from '../../services/participante.model';
import { Router } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { Ciudad } from '../../services/ciudad.model';
import { CargoService } from '../../services/cargo.service';
import { Cargo } from '../../services/cargo.model';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { EmailValidator, FormControl, Validators } from '@angular/forms';

interface ContainerElement extends HTMLElement {
  classList : DOMTokenList;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

ciudades : Ciudad[] = []
cargos : Cargo[] = []
participantes : Participante[] = []
participante : Participante = {
  Nombres : '',
  ApeMaterno: '',
  ApePaterno: '',
  Edad: 0,
  Genero: '',
  Telefono: '',
  Correo: '',
  Ciudad: '',
  Password: '',
  Eventos: {
    NomEvento: '',
    Area: ''
  }
}

email : string = ''
passwd : string = ''
pmv = passwordMatchValidator

vEmail : FormControl = new FormControl('', [Validators.required, Validators.email]);
vPasswd : FormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])

constructor(
  private ps : ParticipanteService,
  private cs : CiudadService,
  private cas : CargoService,
  private router : Router,
  private er : ElementRef    
) { }

ngOnInit(): void {
  this.getCities();
  this.getCargos();
}

ngAfterViewInit() {
  const signUpButton = this.er.nativeElement.querySelector('#signUp');
  const signInButton = this.er.nativeElement.querySelector('#signIn');
  const container = this.er.nativeElement.querySelector('.container') as ContainerElement;

  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
}

saveParticipante() {

  this.ps.saveParticipante(this.participante).subscribe(
    res => {
      this.router.navigate(['/registro']);
    },
    err => console.log(err)
  )
}

getCities() {
  this.cs.getCiudades().subscribe(ciudades => {
    this.ciudades = ciudades;
  })
}

getCargos() {
  this.cas.getCargos().subscribe(cargos => {
    this.cargos = cargos;
  })
}

login(correo: string) {
  this.vEmail.setValue(correo);
  if (this.vEmail.valid) {
    this.ps.getUsuario(correo).subscribe(
      (resp) => {
        if (resp) { // Verificar si resp no es null o undefined
          sessionStorage.setItem('Nombres', resp.Nombres.toString());
          sessionStorage.setItem('ApePaterno', resp.ApePaterno.toString());
          sessionStorage.setItem('ApeMaterno', resp.ApeMaterno.toString());
          sessionStorage.setItem('Edad', resp.Edad.toString());
          sessionStorage.setItem('Genero', resp.Genero.toString());
          sessionStorage.setItem('Telefono', resp.Telefono.toString());
          sessionStorage.setItem('Correo', resp.Correo.toString());
          sessionStorage.setItem('Ciudad', resp.Ciudad.toString());
          sessionStorage.setItem('Password', resp.Password.toString());
          this.router.navigate(['/participante']);
        } else {
          console.error('Respuesta no definida:', resp);
          // Manejar el caso en que resp es null o undefined
        }
      },
      (error) => {
        console.error('Error al obtener usuario:', error);
      }
    );
  }
}



}
