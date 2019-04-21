/*
    1. (4. index.html) Tenemos que crear una estructura con los imports de "RouterModule" y "Routes".
Crear una constante que se iguale "Routes" y un arreglo donde tenga las rutas y exportar con otra
constante que defina el "RouterModule.forRoot(constante pasada)"
    2. Empezaremos con la ruta del HomeComponent y se hace la respectiva importación. Donde definimos
las rutas agregamos el path que llamaremos como querramos y colocamos el componente, además en el
siguiente índice le colocamos una redirección por si no carga aLgún elemento a la sección principal.
    3. Importaremos este archivo al archivo de modulos principal de Angular, y ademas ordenamos.
    4. Ahora nos vamos al componente html principal de Angular y creamos un div con la clase container 
que pertenece a bootstrap y dentro colocamos la siguiente etiqueta <router-outlet>.
    5. Por el momento utilizamos una ruta relativa que nos puede traer problemas en el futuro, para
trabajar esto tenemos que colocar como una especie de opción al final de export en un objeto un
"useHash: true".
    6. Ahora agregamos todas las rutas restantes y hacemos las respectivas importaciones al módulo ts.
    7. Vamos para el archivo html del navbar para configurar las rutas.

*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { BuscaComponent } from './components/busca/busca.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'busca/:data', component: BuscaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
