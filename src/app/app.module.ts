import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountEmpleadoComponent } from './components/empleado-list/count-empleado/count-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountEmpleadoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
