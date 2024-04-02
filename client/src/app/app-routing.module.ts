import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { AdminEventosComponent } from './componentes/admin-eventos/admin-eventos.component';
import { EventssComponent } from './componentes/eventss/eventss.component';
import { IndexComponent } from './componentes/index/index.component';
import { MainComponent } from './componentes/main/main.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { DetalleEventosComponent } from './componentes/detalle-eventos/detalle-eventos.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { ParticipanteComponent } from './componentes/participante/participante.component';

const routes: Routes = [
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'administracion',
    component: AdminEventosComponent
  },
  {
    path: '',
    redirectTo : 'eventos',
    pathMatch: 'full'
  },
  {
    path: 'eventss',
    component: EventssComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent
  },
  {
    path:'editar-evento/:id',
    component: DetalleEventosComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path:'inicio',
    component: LoginComponent
  },
  {
    path:'participante',
    component:ParticipanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
