import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavProductsComponent } from "./components/nav-products/nav-products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductDisplayComponent, FooterComponent, NavProductsComponent, NavProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clothesproject';
  
}
