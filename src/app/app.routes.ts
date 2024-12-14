import { Routes } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    {path:"displayproduct", component:ProductDisplayComponent},
    {path:"nav", component:NavbarComponent}
    
];
