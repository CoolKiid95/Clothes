import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito/carrito.service';
import { UsersService } from '../../services/users/users.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product/product.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    productService=inject(ProductService)
    user!: any
    productosCart: any = []
    cartCount: number = 0;
    busqueda = new FormControl
    products!:any

        constructor (private carritoServive:CarritoService, private UsersService:UsersService, private router:Router ) {}
        estado!:boolean
        ngOnInit(){

            if (sessionStorage.getItem('token')) {
                this.estado=true
            }else{
                this.estado=false
            }

            this.productosCart = this.carritoServive.getProductsCart()
            console.log(this.productosCart);

            this.cartCount = this.carritoServive.getCartCount()

            for (let i = 0; i < this.productosCart.length; i++) {
                const producto = this.productosCart[i];


                this.UsersService.GetUser(producto.owner).subscribe({
                    next: (resApi: any) => {
                    console.log(resApi);
                    producto.nombre = resApi.nombre;
                    producto.apellido = resApi.apellido;
                    this.productosCart[i] = producto;
                    },
                    error: (error: any) => {
                    console.log(error);
                    }
                });
            }
        }
        ngDoCheck(){
            this.ngOnInit()
        }
        logout(){
            sessionStorage.removeItem('token')
            this.router.navigate(['home'])
            this.ngOnInit()
        }
        buscar(){
            this.productService.busqueda(this.busqueda.value).subscribe({
                next:(resApi:any)=>{
                    this.products=resApi
                },
                error(error:any) {
                    console.log(error);

                },
            })
        }

}
