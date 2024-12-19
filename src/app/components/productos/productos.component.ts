import { Component, Inject, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
    productService = inject(ProductService)
    userService = inject(UsersService)
    items!:any
    usuario!:any
    precio!:string
    ngOnInit(){
        this.productService.GetProducts().subscribe({
            next:(resApi:any)=>{

                this.items = resApi

                for (let i = 0; i < this.items.length; i++) {
                    const element = this.items[i];
                    this.userService.GetUser(element.owner).subscribe({

                        next:(resApi:any)=>{
                            this.usuario=resApi
                            element.imag=this.usuario.imagen
                            element.nombre=this.usuario.nombre
                            element.apellido=this.usuario.apellido
                        },
                        error:(error:any)=>{
                            console.log(error);
                        }
                    })
                }
            },
            error:(error:any)=>{
                console.log(error);

            }
        })


    }
}
