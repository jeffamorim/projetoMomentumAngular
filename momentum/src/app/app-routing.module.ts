import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SbrenosComponent } from './sbrenos/sbrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sbrenos', component: SbrenosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'formulario', component: FormularioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
