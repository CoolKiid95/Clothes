import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {






    productService = inject (ProductService)
    products!: any
    formProduct!: FormGroup

    constructor (private fb : FormBuilder){
        this.formProduct = this.fb.group({
            prenda: ['', [Validators.required]],
            tipo: ['', [Validators.required]],
            estado: ['', [Validators.required]],
            marca: ['', [Validators.required]],
            imagen: ['', [Validators.required]],
            descricion: ['', [Validators.required]],
            talla: ['', [Validators.required]],
            owner: ['', [Validators.required]]
        })
    }

    addProduct () {
        if (this.formProduct.valid) {
            this.productService.addProduct(this.formProduct.value).subscribe({
                next: (resApi: any) => {
                    this.formProduct.reset()

                    Swal.fire ({
                        icon:"success",
                        title:"Nuevo producto creado",
                        text:"Nuevo producto agregado"
                    })
                },
                error: (error: any) => {
                    console.log(error);
                    Swal.fire ({
                        icon: "error",
                        title:"Producto no creado",
                        text:"No se ha agregado el producto"
                    })
                }
            })
        } else {
            Swal.fire ({
                icon:"error",
                title:"No se ha agregado el producto",
                text:"Diligiencie correctamente el formulario"
            })
        }
    }
}
