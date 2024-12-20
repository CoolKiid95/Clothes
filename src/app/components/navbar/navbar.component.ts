import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito/carrito.service';
import { UsersService } from '../../services/users/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    user!: any
    productosCart: any = []
    cartCount: number = 0;


        constructor (private carritoServive:CarritoService, private UsersService:UsersService ) {}

        ngOnInit(){
            // console.log(this.carritoServive.getProductsCart());

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

}
