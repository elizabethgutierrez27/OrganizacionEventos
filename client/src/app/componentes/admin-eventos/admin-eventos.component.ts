import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/area.service';
import { Area } from '../../services/area.model';
import { Evento } from '../../services/evento.model';
import { EventoService } from '../../services/evento.service';
import { Router, RouterLink } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { Ciudad } from '../../services/ciudad.model';

@Component({
  selector: 'app-admin-eventos',
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.css']
})
export class AdminEventosComponent implements OnInit {
  
  areas: Area[] = [];
  ciudades: Ciudad[] = [];
  evento: Evento = {
    NomEvento: '',
    Ciudad: '',
    Area: '',
    Descripcion: '',
    FechaInicio: '',
    FechaFinal: '',
    Cupo: 0,
    Imagen: '',
    Participantes: 0,
    Asistentes: 0
  }

  ciudad : Ciudad = {
    NomCiudad : ''
  }
  
  constructor (
    private as: AreaService, 
    private cs: CiudadService,
    private es: EventoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllAreas();
    this.getAllCiudades();
  }

  getAllAreas(): void {
    this.as.getAreas().subscribe(areas => {
      this.areas = areas;
      console.log(areas);
      //console.log("ya jala creo")
    })
  }

  getAllCiudades():void {
    this.cs.getCiudades().subscribe(ciudad => {
      this.ciudades = ciudad;
      console.log(ciudad);
      //console.log("ya jala creo")
    })
  }

  saveEvento() {
    // Verificar si el campo NomEvento está vacío o no tiene un valor válido
    if (!this.evento.NomEvento || this.evento.NomEvento.trim() === '') {
        console.log('El nombre del evento es requerido.');
        return;
    }

    // Convierte las fechas a string usando toISOString()
    this.evento.FechaInicio = this.evento.FechaInicio.toString();
    this.evento.FechaFinal = this.evento.FechaFinal.toString();

    console.log('Datos del evento:', this.evento);

    delete this.evento.Asistentes;
    delete this.evento.Participantes;
    // this.evento.Imagen;

    this.es.saveEvento(this.evento).subscribe(
        res => {
            console.log(res);
            this.router.navigate(['/eventos']);
        },
        err => console.log(err)
    )
}

saveCiudad() {
  this.cs.saveCiudad(this.ciudad).subscribe(
    res => {
      this.router.navigate(['/eventos']);
    },
    err => console.error(err)
  )
}
}
