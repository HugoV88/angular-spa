/*
    1. (8. navbar.component.html) Creamos el método del motor de búsqueda y probamos con
console.log().
    2. Vamos para el servicio y creamos un método que se llamará "buscarHeroes" que tendrá
un argumento que será el término de búsqueda. Dentro del método convertimos el argumento en
minúsucula con el método toLowerCase(); y creamos otra variable que será un arreglo vacío de
tipo Heroe.
    3. Creamos un bucle for of que iterará sobre el arreglo completo de heroes: Heroe[]; en 
el archivo de servicios, y dentro creamos una variable que contendrá el resultado objeto con 
el nombre, y creamos una declaración que será la variable recien creada buscando con IndexOf
el término que colocamos como argumento, que tendrá que ser mayor o igual a cero. En la
declaración haremos que el arreglo vacío recien creado se el agrega los términos que cumplan
con la condición con push();. El método finaliza con el retorno del arreglo recien modificado.
    4. Ahora iremos a busca.component.ts para trabajar los métodos del resultado de búsqueda.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(data: string) {
    this._router.navigate( [ '/busca', data ] )
  }

}
