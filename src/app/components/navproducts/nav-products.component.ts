import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-products',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-products.component.html',
  styleUrl: './nav-products.component.css'
})
export class NavProductsComponent {
    hoverCategory: string = '';
    setHover(category: string) {
      this.hoverCategory = category;
    }
    removeHover() {
      this.hoverCategory = '';
    }
}
