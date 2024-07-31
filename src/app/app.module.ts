import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
