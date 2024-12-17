import { Component, Inject } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent {
  PService = Inject(ProductService)
  UService = Inject(UsersService)
  product!:any
  relatedproducts!:any
  
  ngOninit(){
    
    



  }

  getowner(id:string){
    this.UService.GetUser().subscribe((owner:any)=>{
      
    })
  }
  getproduct(id:string){
    this.PService.GetProduct().subscribe((producto:any)=>{
      this.product=producto
    })
  }
  getrelated(){
    this.PService.getProductsbyCategories((products:any)=>{
      this.relatedproducts=products

    })
  }
}
