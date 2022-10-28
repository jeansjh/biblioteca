import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LibroComponent } from './pages/libro/libro.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
    path:'nosotros',
    component:NosotrosComponent
  },{
    path:'cursos',
    component:CursosComponent
  },{
    path:'biblioteca',
    component:BibliotecaComponent
  },{
    path:'libro',
    component:LibroComponent
  },{
    path:'buscar/:termino',
    component:BuscarComponent
  },{
    path:'docente',
    component:DocentesComponent
  },{
    path:'contacto',
    component:ContactoComponent
  },{
    path:'**',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
