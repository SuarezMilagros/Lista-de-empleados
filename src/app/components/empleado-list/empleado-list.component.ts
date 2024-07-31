import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../models/Empleado';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']  
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 2500 },
    { legajo: 2, nombre: 'Sofia', apellido: 'Ruiz', sexo: 'Femenino', salario: 4500 },
    { legajo: 3, nombre: 'Florencia', apellido: 'Suarez', sexo: 'Femenino', salario: 3300 },
    { legajo: 4, nombre: 'Emanuel', apellido: 'Paez', sexo: 'Masculino', salario: 2500 },
    { legajo: 5, nombre: 'Jose', apellido: 'Medina', sexo: 'Masculino', salario: 5000 },
    { legajo: 6, nombre: 'Lucia', apellido: 'Lastra', sexo: 'Femenino', salario: 4200 }
  ];
  radioButtonSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleado(): number {
    return this.listEmpleados.length;
  }
  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length
  }
  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length

  }

}
