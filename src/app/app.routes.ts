import { Routes } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { TermsComponent } from './components/terms/terms.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {path:"displayproduct", component:ProductDisplayComponent},
    {path:"nav", component:NavbarComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '',component: HomeComponent},
    {path:'quienessomos', component: QuienesSomosComponent},
    {path: 'comoFunciona', component: ComoFuncionaComponent},
    {path: 'termycondiciones', component: TermsComponent}
];
