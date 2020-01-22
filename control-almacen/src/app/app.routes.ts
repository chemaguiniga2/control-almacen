import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SalidasComponent } from './components/salidas/salidas.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const APP_ROUTES:Routes = [
  { path: 'entrada', component: EntradaComponent },
  { path: 'salidas', component: SalidasComponent },
  { path: 'consulta', component: ConsultaComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);