import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../../services/evento.model';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { AreaService } from '../../services/area.service';
import { Area } from '../../services/area.model';

@Component({
  selector: 'app-detalle-eventos',
  templateUrl: './detalle-eventos.component.html',
  styleUrls: ['./detalle-eventos.component.css']
})
export class DetalleEventosComponent implements OnInit {
  areas: Area[] = [];
  evento: Evento = {
    _id: '',
    NomEvento: '',
    Ciudad: '',
    Area: '',
    Descripcion: '',
    FechaInicio: '', // Mantenemos la fecha como string
    FechaFinal: '', // Mantenemos la fecha como string
    Cupo: 0,
    Imagen: '',
    Participantes: 0,
    Asistentes: 0
  };

  eventoEditado: Evento = { ...this.evento }; // Copia del evento para editar

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventoService: EventoService,
    private as: AreaService
  ) {}

  ngOnInit(): void {
    this.getEvento();
    this.cargarAreas();
  }

  cargarAreas() {
    this.as.getAreas().subscribe(areas => {
      this.areas = areas;
      console.log(areas);
    })
  }

  getEvento(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventoService.getEventoById(id).subscribe(
        evento => {
          this.evento = evento;
          this.eventoEditado = { ...evento }; // Copiar el evento para editar
        },
        error => {
          console.error('Error al obtener el evento:', error);
        }
      );
    }
  }

  guardarCambios(): void {
    // Enviar los cambios al servicio
    this.eventoService.updateEvento(this.eventoEditado).subscribe(
      () => {
        console.log('Evento actualizado correctamente');
        this.router.navigate(['/eventos']);
      },
      error => {
        console.error('Error al actualizar el evento:', error);
      }
    );
  }
}
