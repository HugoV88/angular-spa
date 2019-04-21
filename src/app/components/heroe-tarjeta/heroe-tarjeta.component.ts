/* 
    1. Empezaremos a trabajar con los @input, y primero deberemos hacer la importación de la
interfaz input desde @angular/core.
    2. Creamos un objeto heroe vacío y le colocamos el decorador input.
    3. Ahora para poder recibir la información del *ngFor de heroes.component.html tendremos que ir
hacia ese archivo y manejar el heroes de aquí como una variable e igualarla al resultado del bucle.
Ya esto debería de mostrar información.
    4. Aún tenemos un problema y es que el método del boton para mostrar la información detallada
del héroe no funciona. Para esto haremos lo mismo pero creando un método en este archivo que solo
recibirá del input la variable que crearemos del índice, y se conectará con heroes.component.html
por medio de una variable que colocamos en ese archivo. Ahora con el método creado hacemos un
console.log para probar.
    5. Ya comprobada la conexión utilizaremos la clase Router de @angular/router y hacemos la respectiva
importación. Trabajamos con el navigate de Router en el método que hemos creado recientemente y
contendrá la ruta de [ '/heroe', this.index ].
    6. Ahora haremos el mismo procedimiento con busca.component pero tendrá el detalle de que no funcionará
el boton para mostrar el datalle del héroe, esto lo trabajaremos luego.
    7. Para trabajar el método de otra manera y saber como utilizar el @Outout que sería el proceso
inverso del @Input. Primero importamos el Output y EventEmitter del @angular/core.
    8. Creamos una variable llamada seleccionarHeroe con el output como interfaz y de tipo EventEmitter<number>;.
    9. Comentamos todo lo que habíamos hecho en el método de verHeroe() y ahora trabajaremos con la variable
seleccionarHeroe recien creada para hacerla con el Output.
    10. Empezamos this.seleccionarHeroe en el scope del constructor y lo igualamos a un "new EventEmitter();"
    11. Ahora vamos al método verHeroe() y colocamos "this.seleccionaHeroe.emit( this.index )", podemos emitir
cualquier cosa.
    12. El padre aún no escucha lo que hicimos aquí en el hijo, así que vamos a heroes.component.html y
colocamos en la etiqueta de la tarjeta (seleccionarHeroe)="verHeroe( $event )". La palabra reservada
"$event" es para escuchar el evento y es obligatoria. Ya debería funcionar el boton.
    13. Comentamos todo lo que hicimos  en el método verHeroe porque lo trabajaremos de la primera forma.
    14. Ahora para poner a funcionar el boton de detalles del héroe tendremos que modificar el
busca.component.html y tendremos que colocar en el elemento de la tarjeta [index]="heroe.idx" que será
la propiedad donde se encuentra el id.

*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}
  @Input() index: number;
  @Output() seleccionarHeroe: EventEmitter<number>;

  constructor(private _heroesService: HeroesService, private _router: Router) { 
    this.seleccionarHeroe = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // this.seleccionarHeroe.emit(this.index);
    console.log(this.index);
    this._router.navigate( [ '/heroe', this.index ] );
  }

}
