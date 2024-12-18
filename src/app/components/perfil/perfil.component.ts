import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  user!:any
  userid!:string

    constructor(private Pservice:ProductService, private UService:UsersService, private route: ActivatedRoute){

  }
  ngOnInit(){
    this.userid = this.route.snapshot.paramMap.get('userid') || '';
    console.log(this.userid);
    
    this.getuser(this.userid)



  }

  getuser(userid:string){
    this.UService.GetUser(userid).subscribe((usuario)=>{
      console.log(usuario);
      
      this.user=usuario
    })
  }


}
