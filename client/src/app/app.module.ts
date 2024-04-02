import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { AdminEventosComponent } from './componentes/admin-eventos/admin-eventos.component';
import { MainComponent } from './componentes/main/main.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { EventssComponent } from './componentes/eventss/eventss.component';
import { IndexComponent } from './componentes/index/index.component';
import { DetalleEventosComponent } from './componentes/detalle-eventos/detalle-eventos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ParticipanteComponent } from './componentes/participante/participante.component';

const routes: Routes=[

]

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    AdminEventosComponent,
    MainComponent,
    NavigationComponent,
    EventssComponent,
    IndexComponent,
    DetalleEventosComponent,
    LoginComponent,
    RegisterComponent,
    ParticipanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
