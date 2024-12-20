import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito/carrito.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
    productosCart: any = []
    user!: any

    constructor (private carritoServive:CarritoService, private UsersService:UsersService ) {}

    ngOnInit(){
        // console.log(this.carritoServive.getProductsCart());

        this.productosCart = this.carritoServive.getProductsCart()

        this.UsersService.GetUser(this.productosCart.owner).subscribe({
            next:(resApi : any)=> {
                console.log(resApi);
                this.user = resApi
            },
            error:(error: any)=>{
                console.log(error);
            }
        })
    }

}
