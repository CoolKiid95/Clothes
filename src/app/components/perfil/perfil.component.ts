import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { producerIncrementEpoch } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  user!:any
  userid!:string
  productService = inject(ProductService)
  misproductos!:any

  products!: any
  formProduct!: FormGroup

    constructor(private fb : FormBuilder, private Pservice:ProductService, private UService:UsersService, private route: ActivatedRoute){
        this.formProduct = this.fb.group({
                    prenda: ['', [Validators.required]],
                    tipo: ['', [Validators.required]],
                    precio: ['', [Validators.required]],
                    estado: ['', [Validators.required]],
                    marca: ['', [Validators.required]],
                    imagen: ['', [Validators.required]],
                    descricion: ['', [Validators.required]],
                    talla: ['', [Validators.required]],
                    owner: ['', [Validators.required]]
                })

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
  addProduct () {
          if (this.formProduct.valid) {
              this.productService.addProduct(this.formProduct.value).subscribe({
                  next: (resApi: any) => {
                      this.formProduct.reset()
                      this.ngOnInit()
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




