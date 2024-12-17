import { Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},


];
