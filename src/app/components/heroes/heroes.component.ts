/*
    1. (3. heroes.service.ts) Para finalizar la importación de nuestra clase servicio tendremos que
colocar en el argumento del constructor lo siguiente "private _heroesService:HeroesService".
    2. Creamos una arreglo vacío llamado heroes:any[] = [] y en el ngOnInit llamamos este arreglo con
el this y lo igualamos a la variable que creamos en el constructor llamado "heroesServices" con el
módulo que returna todo nuestro arreglo de objetos, hacemos console.log para probar.
    3. Ahora crearemos una interfaz para definir nuestra clase y que no se salga de los parámetros en
el archivo heroes.service.ts, y la importamos aquí y también a los módulos principales.
    4. Ahora vamos al archivo heroes.component.html para configurar "ngFor".
*/

import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  // verHeroe( i: number) {
  //   this._router.navigate( ['/heroe', i] );
  // }

}
