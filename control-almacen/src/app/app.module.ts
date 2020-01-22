import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { SalidasComponent } from './components/salidas/salidas.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    NavbarComponent,
    SalidasComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
