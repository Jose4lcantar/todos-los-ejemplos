import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambié styleUrl a styleUrls
})
export class AppComponent {
  title = 'Fundamentos';

  // Propiedades
  nombre = 'Chema';
  email = 'alcantarchema261@gmail.com';
  aniosServicio = '22';
  activo = false;
  alumnos = [24, 25, 26];
  numero = 2;
  contador = 0;
  desactivarBoton = true;

  productos = [
    {
      id: 1,
      descripcion: 'Gansito',
      precio: 15.50
    },
    {
      id: 2,
      descripcion: 'Rufles',
      precio: 16.50
    },
    {
      id: 3,
      descripcion: 'Cheetos',
      precio: 20
    }
  ]; // Eliminar punto y coma extra

  // Función que muestra si el profesor está activo o no
  estaActivo() {
    if (this.activo) {
      return 'Empleado activo';
    } else {
      return 'Empleado inactivo';
    }
  }

  // Función que suma los alumnos del arreglo
  sumarAlumnos() {
    let suma = 0;
    for (let i = 0; i < this.alumnos.length; i++) {
      suma += this.alumnos[i];
    }
    return suma;
  }

  // Función que incrementa el contador
  incrementarContador() {
    this.contador++;
  }

  // Función para decrementar el contador
  decrementarContador() {
    this.contador--;
  }

  // Función que cambia el valor de desactivar botón
  cambiarValor() {
    if (this.desactivarBoton) {
      this.desactivarBoton = false;
    }
  }
}
