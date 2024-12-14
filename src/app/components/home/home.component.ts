import { Component } from '@angular/core';
import { NavProductsComponent } from '../navproducts/nav-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavProductsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
