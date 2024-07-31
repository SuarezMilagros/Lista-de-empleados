import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empleado_list';
}
