import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-count-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './count-empleado.component.html',
  styleUrl: './count-empleado.component.css'
})
export class CountEmpleadoComponent {

@Input() todos: number;
@Input() femenino: number;
@Input() masculino: number;


  radioButtonSeleccionado = 'Todos';




  constructor(){
    this.todos = 0;
    this.femenino = 0;
    this.masculino = 0;
  }


  ngOnInit(): void {

  }
}
