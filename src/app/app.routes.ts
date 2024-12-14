import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { TermsComponent } from './components/terms/terms.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {path: 'contacto', component: ContactoComponent},
    {path:'quienessomos', component: QuienesSomosComponent},
    {path: 'comoFunciona', component: ComoFuncionaComponent},
    {path: 'termycondiciones', component: TermsComponent}
];
