import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-products',
  standalone: true,
  imports: [],
  templateUrl: './nav-products.component.html',
  styleUrl: './nav-products.component.css'
})
export class NavProductsComponent {
    mostrar: boolean = true
    mostrar1: boolean = true
    mostrar2: boolean = true
    hover() {
        this.mostrar = false
    }
    noHover() {
        this.mostrar = true
    }
    hover1 () {
        this.mostrar1 = false
    }
    noHover1 () {
        this.mostrar1 = true
    }

    hover2 (){
        this.mostrar2 = false
    }

    noHover2 () {
        this.mostrar2 = true
    }

}
