/*
    1. (5. navbar.component.html) creamos un servicio como se ve en la siguiente estructura, cambiamos
la clase a "HeroesService" y creamos adentro su respectivo constructor con un console.log para probar.
    2. Ahora tendremos que importar nuestra clase al modulo principal y lo agregamos a "providers".
    3. En una variable privada llamada heroes de tipo cualquiera arreglo copiamos nuestro contenido en
un objeto dentro de arreglo.
    4. Ahora para poder tener acceso a toda esta información se creará un método.
    5. Ahora nos vamos a heroes.component.ts para importar nuestra clase HeroesService.
*/

import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    heroes: Heroe[] = [
        {
          nombre: 'Aquaman',
          bio: 'El poder mÃ¡s reconocido de Aquaman es la capacidad telepÃ¡tica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
          img: 'assets/img/aquaman.png',
          aparicion: '1941-11-01',
          casa: 'DC',
          idx: 0
        },
        {
          nombre: 'Batman',
          bio: 'Los rasgos principales de Batman se resumen en Â«destreza fÃ­sica, habilidades deductivas y obsesiÃ³nÂ». La mayor parte de las caracterÃ­sticas bÃ¡sicas de los cÃ³mics han variado por las diferentes interpretaciones que le han dado al personaje.',
          img: 'assets/img/batman.png',
          aparicion: '1939-05-01',
          casa: 'DC',
          idx: 1
        },
        {
          nombre: 'Daredevil',
          bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiaciÃ³n a niveles superhumanos, en el accidente que tuvo cuando era niÃ±o. A pesar de su ceguera, puede "ver" a travÃ©s de un "sexto sentido" que le sirve como un radar similar al de los murciÃ©lagos.',
          img: 'assets/img/daredevil.png',
          aparicion: '1964-01-01',
          casa: 'Marvel',
          idx: 2
        },
        {
          nombre: 'Hulk',
          bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prÃ¡cticamente ilimitados a la vez que aumenta su furia. Dependiendo de quÃ© personalidad de Hulk estÃ© al mando en ese momento (el Hulk Banner es el mÃ¡s dÃ©bil, pero lo compensa con su inteligencia).',
          img: 'assets/img/hulk.png',
          aparicion: '1962-05-01',
          casa: 'Marvel',
          idx: 3
        },
        {
          nombre: 'Linterna Verde',
          bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sÃ³lida mediante la utilizaciÃ³n del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder mÃ­stico llamado Starheart), una llama mÃ¡gica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayÃ³ a la Tierra, el cual encontrÃ³ un fabricante de lÃ¡mparas llamado Chang)',
          img: 'assets/img/linterna-verde.png',
          aparicion: '1940-06-01',
          casa: 'DC',
          idx: 4
        },
        {
          nombre: 'Spider-Man',
          bio: 'Tras ser mordido por una araÃ±a radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o mÃ¡s. Gracias a esta gran fuerza Spider-Man puede realizar saltos Ã­ncreibles. Un "sentido arÃ¡cnido", que le permite saber si un peligro se cierne sobre Ã©l, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
          img: 'assets/img/spiderman.png',
          aparicion: '1962-08-01',
          casa: 'Marvel',
          idx: 5
        },
        {
          nombre: 'Wolverine',
          bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que Ã©sta sea, ademÃ¡s ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee tambiÃ©n una fuerza sobrehumana, que si bien no se compara con la de otros superhÃ©roes como Hulk, sÃ­ sobrepasa la de cualquier humano.',
          img: 'assets/img/wolverine.png',
          aparicion: '1974-11-01',
          casa: 'Marvel',
          idx: 6
        }
    ];

    constructor() {
        console.log('Servicio listo para usar!');
    }

    getHeroes(): Heroe[] {
        return this.heroes;
    }

    getHeroe(i: number): Heroe {
        return this.heroes[i];
    }

    buscarHeroe(data: string) {
       data = data.toLowerCase();
       const heroesArr: Heroe[] = [];

       for (const heroe of this.heroes) {
         const nombre: string = heroe.nombre.toLowerCase();

         if (nombre.indexOf(data) >= 0) {
           heroesArr.push(heroe);
         }

        }
       return heroesArr;
    }
}

export interface Heroe {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx: number;
}
