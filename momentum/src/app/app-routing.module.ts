import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SbrenosComponent } from './sbrenos/sbrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { FaqComponent } from './faq/faq.component';
import { AcolhimentoComponent } from './acolhimento/acolhimento.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPostagemComponent } from './editar-postagem/editar-postagem.component';
import { DeletarPostagemComponent } from './deletar-postagem/deletar-postagem.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobrenos', component: SbrenosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'deletar/:id', component: DeletarComponent },
  { path: 'acolhimento', component: AcolhimentoComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'editar-postagem/:id', component: EditarPostagemComponent },
  { path: 'excluir-postagem/:id', component: DeletarPostagemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
