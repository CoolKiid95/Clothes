import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { producerIncrementEpoch } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  user!:any
  userid!:string
  misproductos!:any
  estado!:boolean
    constructor(private Pservice:ProductService, private UService:UsersService, private route: ActivatedRoute){

  }
  ngOnInit(){
    this.userid = this.route.snapshot.paramMap.get('userid') || '';
    console.log(this.userid);
    
    this.getuser(this.userid)
    this.getprendas(this.userid)
    if (this.userid) {
      
    } else {
      
    }


  }

  getuser(userid:string){
    this.UService.GetUser(userid).subscribe((usuario)=>{
      console.log(usuario);
      
      this.user=usuario
    })
  }
  getprendas(userid:string){
    this.Pservice.GetProductbyOwner(userid).subscribe((products)=>{
      console.log(products);
      
      this.misproductos=products
    })
  }
  Addprenda(){

  }
  reloadPage() {
  }

}
