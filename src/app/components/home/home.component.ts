import { Component, inject } from '@angular/core';
import { NavProductsComponent } from '../navproducts/nav-products.component';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavProductsComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(private router:Router) {}
    productos! : any
    productService = inject(ProductService)

    ngOnInit () {
        if (sessionStorage.getItem('token') == undefined || null) {
             this.router.navigate(['perfil'])
        }
        this.productService.GetProducts().subscribe({
             next:(resApi : any)=> {
                 console.log(resApi);
                 this.productos = resApi
             },
             error:(error: any)=>{
                 console.log(error);

             }
         })
     }
}
