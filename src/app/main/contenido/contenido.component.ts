import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  @Input() texto = "texto 1"

  cambiartexto() {
    this.texto = "prueba"
  }
}
