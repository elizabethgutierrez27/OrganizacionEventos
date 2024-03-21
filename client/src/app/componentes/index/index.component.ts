import { Component, OnInit } from '@angular/core';
import { Evento } from '../../services/evento.model';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  eventos : Evento[] = [];

  constructor(private es : EventoService) { }

  ngOnInit(): void {
      this.getEventos();
  }

  getEventos() {
    this.es.getEvento().subscribe(eventos => {
      this.eventos = eventos;
    })
  }
}
