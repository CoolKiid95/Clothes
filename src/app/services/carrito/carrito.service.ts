import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

   cart: any = []
   productosCart: any =[]

  constructor() {  }
  Addproductcart (product: any){
    return this.cart.push(product)
  }
  getProductsCart () {
    return this.cart
  }
  getCartCount(): number {
    return this.productosCart.length;
  }
}
