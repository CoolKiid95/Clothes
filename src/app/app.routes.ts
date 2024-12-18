import { Routes } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { TermsComponent } from './components/terms/terms.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { Error404Component } from './error404/error404.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';


export const routes: Routes = [
    {path:"producto/:id", component:ProductDisplayComponent},
    {path:"nav", component:NavbarComponent},
    {path:"home", component:HomeComponent},
    {path: "perfil", component:PerfilComponent},
    {path:"displayproduct", component:ProductDisplayComponent},
    {path:"nav", component:NavbarComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "",component: HomeComponent},
    {path: "quienessomos", component: QuienesSomosComponent},
    {path: "comoFunciona", component: ComoFuncionaComponent},
    {path: "termycondiciones", component: TermsComponent},
    {path: "login", component:LoginComponent},
    {path: "register", component:RegisterComponent},
    {path: "productos", component: ProductosComponent},
    {path: "carrito", component: CarritoComponent},
    {path: "error404", component: Error404Component},
    {path: "**", pathMatch: 'full', redirectTo: '404'}
];

