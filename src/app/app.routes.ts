import { Routes } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { TermsComponent } from './components/terms/terms.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';


export const routes: Routes = [
    {path:"displayproduct", component:ProductDisplayComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '',component: HomeComponent},
    {path: 'comoFunciona', component: ComoFuncionaComponent},
    {path: 'register', component:RegisterComponent},
    {path:"producto/:id", component:ProductDisplayComponent},
    {path: "perfil/:userid", component:PerfilComponent},
    {path: "perfil", component:PerfilComponent},
    {path:"home", component:HomeComponent},
    {path:"nav", component:NavbarComponent},
    {path: "",component: HomeComponent},
    {path: "quienessomos", component: QuienesSomosComponent},
    {path: "termycondiciones", component: TermsComponent},
    {path: "login", component:LoginComponent},
    {path: "productos", component: ProductosComponent},
    {path: "carrito", component: CarritoComponent},
    {path: "error404", component: Error404Component},
    {path: "**", pathMatch: 'full', redirectTo: '404'}
];

