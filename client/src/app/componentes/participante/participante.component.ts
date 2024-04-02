import { Component, OnInit } from '@angular/core';
import { Evento } from '../../services/evento.model';
import { EventoService } from '../../services/evento.service';
import { AreaService } from '../../services/area.service';
import { Area } from '../../models/areaModel';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrl: './participante.component.css'
})
export class ParticipanteComponent implements OnInit{
  eventos : Evento[] = [];
  areas: Area[] = [];
  selectedArea: string = "";

  constructor(private es : EventoService, private as: AreaService) { }

  ngOnInit(): void {
      this.getEventos();
      this.getAllAreas();
      this.getAllEventos();
  }

  getAllAreas(): void {
    this.as.getAreas().subscribe(areas => {
      this.areas = areas;
      console.log(areas);
      console.log("ya jala creo")
    })
  }

  getAllEventos(): void {
    this.es.getEvento().subscribe(eventos => {
      this.eventos = eventos;
      console.log(eventos);
    })
  }

  changeEvento() {
    if (this.selectedArea) {
      this.es.getEventoArea(this.selectedArea).subscribe(eventos => {
        this.eventos = eventos;
      })
    } else {
      this.eventos = [];
    }
  }

  getEventos() {
    this.es.getEvento().subscribe(eventos => {
      this.eventos = eventos;
    })
  }

  inscribirse(evento: Evento): void {
    if (evento && evento.Participantes !== undefined) {
      const updatedEvento = { ...evento, Participantes: (evento.Participantes || 0) + 1 };
      this.es.updateEvento(updatedEvento).subscribe(
        response => {
          console.log('Inscripción exitosa en el evento:', response);
          // Actualiza localmente el número de participantes en el evento
          if (evento.Participantes !== undefined) {
            evento.Participantes++;
          }
        },
        error => {
          console.error('Error al inscribirse en el evento:', error);
        }
      );
    } else {
      // Si el evento no tiene la propiedad de participantes definida o es indefinida, agregamos la propiedad con el valor 1
      const updatedEvento = { ...evento, participantes: 1 };
      this.es.updateEvento(updatedEvento).subscribe(
        response => {
          console.log('Inscripción exitosa en el evento:', response);
          // Actualiza localmente el número de participantes en el evento
          evento.Participantes = 1;
        },
        error => {
          console.error('Error al inscribirse en el evento:', error);
        }
      );
    }
  }
  
}
