import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent {
 @Input() texto2 = "texto 2";
 @Output() cambiarNomnbre = new EventEmitter<string>();

  cambiartexto() {
    this.texto2 = "prueba 2"
    this.cambiarNomnbre.emit(this.texto2)
  }
}

