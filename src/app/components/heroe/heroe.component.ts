/*
    1. (6. heroes.component.html) En esta parte solo trabajaremos con el constructor, así
que eliminamos el "ngOnInit"
    2. Hacemos una importación de los archivos @angular/router e importamos el archivo
"ActivatedRoute" y lo agregamos a nuestro constructor con this.activatedRoute.params.subscribe(),
que dentro tendrá un callback y para probar hacemos un console.log(callback.id). Este id
es el que agregamos a nuestras rutas en el path y también se representa callback['id'].
    4. Ahora tendremos que ir al archivo de servicios y creamos otro método que se llamará
"getHeroe()" y retornará la variable heroes creada en ese archivo y tendrá como argumento un
"idx" que representará al id.
    5. En este archivo creamos un objeto de tipo any vacío e importamos los servicios de heroes,
también agregandolo al constructor de la clase de este archivo.
    6. Ahora nos vamos "heroe.component.html" para configurar el body de cada heroe y agregarles
variables dinámicas.
*/

import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {}

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params.id);
    });
  }

}
