import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  cart: any = []


  constructor() {  }
  Addproductcart (product: any){
    return this.cart.push(product)
  }
  getProductsCart () {
    return this.cart
  }
  getCartCount(): number {
    return this.cart.length;
  }
  eliminarProducto(productId: string) {
    this.cart = this.cart.filter((producto: any) => producto._id !== productId);
  }
  // eliminarProducto(productId: string) {
  //   this.cart = [...this.cart.filter((producto: any) => producto._id !== productId)];
  // }  
  // eliminarProducto(productId: string) {
  //   const index = this.cart.findIndex((producto: any) => producto._id === productId);
  //   if (index !== -1) {
  //     this.cart.splice(index, 1);
  //   }
  // }
}
