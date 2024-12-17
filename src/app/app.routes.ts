import { Routes } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';

export const routes: Routes = [
    {path:"producto/:id", component:ProductDisplayComponent},
    
    {path:"nav", component:NavbarComponent},
    {path:"home", component:HomeComponent},
    {path: "perfil", component:PerfilComponent}
];
