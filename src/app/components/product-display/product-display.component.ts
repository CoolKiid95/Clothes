import { Component, Inject } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent {
  // PService = Inject(ProductService)
  // UService = Inject(UsersService)
  product!:any
  relatedproducts!:any
  Categories!:any
  owner!:any
  id!:string
  ownerid!:string
  constructor(private Pservice:ProductService, private UService:UsersService, private route: ActivatedRoute){

  }
  ngOnInit(){

    this.id = this.route.snapshot.paramMap.get('id') || '';
    
    console.log(this.id);
    // console.log(this.product)

    // this.PService.GetProduct(id).subscribe((producto: any)=>{
    //   this.product=producto
    //   console.log("works");
    // })
    this.getproduct(this.id)
    
    
    


  }
  
  getproduct(id:string){
      this.Pservice.GetProduct(id).subscribe((producto)=>{
        this.product=producto

        
        console.log(this.product.owner);
        this.ownerid = this.product.owner

        console.log(this.ownerid);
        this.getowner(this.ownerid)
        console.log(this.owner);
        
        
      })
  }
  getowner(id:string){
    this.UService.GetUser(id).subscribe((ownr)=>{
      this.owner = ownr
    })
  }
  getrelated(){
    this.Pservice.GetProductsbyCategories(this.Categories).subscribe((products)=>{
      this.relatedproducts=products

    })
  }
  
}
