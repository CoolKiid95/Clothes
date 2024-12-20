import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [],
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.css'
})
export class AccesoriosComponent {
    productService = inject(ProductService)
    ngOnInit(tipo:string){
        this.productService.GetProductsbyCategories(tipo).subscribe({
            next:(resApi:any)=>{

            },
            error:(error:any)=>{
                console.log(error);

            }
        })
    }
}
