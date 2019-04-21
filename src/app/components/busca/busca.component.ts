/*
    1. (4. navbar.component.ts) Importamos los servicios que trabajamos y el "ActivatedRoute"
de los archivos router de angular.
    2. Agregamos los argumentos privados de los archivos recien importados y comenzaremos a
trabajar con el ngOnInit();
    3. Primero trabajaremos con el _activatedRoute.params.subscribe(callback =>{...}) que nos
dará acceso para el parámetro del url, poderlo controlar y compartir en todas las rutas necesarias.
Hacemos un console.log del callback para comprobar que funciona.
    4. Ahora tendremos que crear un arreglo vacío de tipo heroes en la clase, y lo trabajamos dentro
del callback, y lo igualaremos a la variable de servicios con el método que creamos para la
búsqueda, y como argumento el callback con su respectiva propiedad que sería el término de búsqueda
que hemos estado trabajando.
    5. Ahora vamos a busca.components.html para configurar nuestro contenido a mostrar, porque ya
todo está enlazado.
*/

import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
})
export class BuscaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params.data;
      this.heroes = this._heroesService.buscarHeroe(params.data);
      console.log(this.heroes);
    });
  }

  /* verHeroe() {
    this._router.navigate( [ '/heroe', this.index ] );
  } */

}
