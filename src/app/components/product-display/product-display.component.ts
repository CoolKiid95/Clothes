import { Component, Inject } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito/carrito.service';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [ RouterLink],
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
  constructor(private Pservice:ProductService, private UService:UsersService, private route: ActivatedRoute, private CarritoSrvice: CarritoService){

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


        this.Categories = this.product.tipo

        this.getrelated(this.Categories)


      })
  }
  getowner(id:string){
    this.UService.GetUser(id).subscribe((ownr)=>{
      this.owner = ownr
    })
  }
  getrelated(categories:string){
    this.Pservice.GetProductsbyCategories(categories).subscribe((products)=>{

      this.relatedproducts=products
      console.log(this.relatedproducts);


    })
  }
  ownerpage(){

  }
  reloadPage() {
    this.ngOnInit()

    // window.location.reload();
  }

  Addcarrito (product: any){
    this.CarritoSrvice.Addproductcart(product)

  }



}
