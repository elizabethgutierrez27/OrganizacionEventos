import { Component, OnInit } from '@angular/core';
import { Area } from '../../services/area.model';
import { Evento } from '../../services/evento.model';
import { AreaService } from '../../services/area.service';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'] // Corrección: Cambiar 'styleUrl' a 'styleUrls'
})
export class EventosComponent implements OnInit {
  
  areas: Area[] = [];
  eventos: Evento[] = [];
  selectedArea: string = "";
  selectedEvento: Evento | null = null;
  modalEdicionAbierto: boolean = false;

  eventoEditado: Evento = {
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
  };
  
  constructor (
    private router: Router,
    private as: AreaService,
    private es: EventoService
  ) { }

  ngOnInit(): void {
    this.getAllAreas();
    this.getAllEventos();
    //this.changeEvento();
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

  // Función para mostrar el modal y cargar los detalles del evento
  mostrarDetalles(evento: Evento) {
    const modal = document.getElementById("modal");
    const eventoNombre = document.getElementById("evento-nombre");
    const eventoDescripcion = document.getElementById("evento-descripcion");
  
    if (modal && eventoNombre && eventoDescripcion) {
      eventoNombre.innerText = evento.NomEvento;
      eventoDescripcion.innerText = evento.Descripcion;
      modal.style.display = "block";
      // Establecer selectedEvento con el objeto completo del evento
      this.selectedEvento = evento;
    }
  } 
  
  cerrarModal() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  eliminarEvento(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      this.es.deleteEvento(id).subscribe(
        () => {
          // Actualiza la lista de eventos después de eliminar uno
          this.getAllEventos();
          console.log('Evento eliminado correctamente');
        },
        error => {
          console.error('Error al eliminar evento:', error);
        }
      );
    }
  }

  editarEvento(id: string) {
    this.router.navigate(['/editar-evento', id]);
  }

  
}
  

