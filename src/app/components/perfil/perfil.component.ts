import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { UsersService } from '../../services/users/users.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  favoritos!:any

  products!: any
  formProduct!: FormGroup
  formUser!: FormGroup
  estado!:boolean



    constructor(private fb : FormBuilder,  private UService:UsersService, private route: ActivatedRoute){
        this.formProduct = this.fb.group({
                    prenda: ['', [Validators.required]],
                    tipo: ['', [Validators.required]],
                    precio: ['', [Validators.required]],
                    estado: ['', [Validators.required]],
                    marca: ['', [Validators.required]],
                    imagen: ['', [Validators.required]],
                    descripcion: ['', [Validators.required]],
                    talla: ['', [Validators.required]],
                    owner: ['', [Validators.required]]
                })
        this.formUser = this.fb.group({
                    nombre: ['', [Validators.required]],
                    apellido: ['', [Validators.required]],
                    email: ['', [Validators.required]],
                    password: ['', [Validators.required]],
                    telefono: ['', [Validators.required]],
                    direccion: ['', [Validators.required]],
                    ciudad:['',[Validators.required]],
                    imagen:['',Validators.required]
        })   }

      ngOnInit(){
        this.userid = this.route.snapshot.paramMap.get('userid') || '';
        console.log(this.userid);

    this.getuser(this.userid)
    this.getprendas(this.userid)
    if (this.userid) {

    } else {

    }
    console.log(this.userid);

      }

      getuser(userid:string){
        this.UService.GetUser(userid).subscribe((usuario)=>{
          console.log(usuario);
          this.user=usuario
          this.favoritos=this.user.favoritos
        })
      }
      addProduct () {

console.log(this.formProduct.value);


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
        this.productService.GetProductbyOwner(userid).subscribe((products)=>{
          console.log(products);

          this.misproductos=products
        })
      }
      EPerfil(){
        this.formUser.setValue({
                    nombre:this.user.nombre,
                    apellido:this.user.apellido,
                    email: this.user.email,
                    password: this.user.password,
                    telefono: this.user.telefono,
                    direccion: this.user.direccion,
                    ciudad:this.user.ciudad,
                    imagen:this.user.imagen
        }); console.log(this.formUser.value);

      }
      EditarPerfil(){
        if(this.formUser.valid){
          this.UService.UpdateUser(this.userid,this.formUser.value).subscribe({
            next: (resApi: any) => {
              this.formUser.reset()
              this.ngOnInit()
              Swal.fire ({
                  icon:"success",
                  title:"Cambios hechos en el usuario",
                  text:"Exitoso"
              })
          },
                error: (error: any) => {
                    console.log(error);
                    Swal.fire ({
                        icon: "error",
                        title:"Cambios no hechos",
                        text:"Cambios no pudieron hacerse"
                    })
                }
            })
        } else {
            Swal.fire ({
                icon:"error",
                title:"No se ha editado el perfil",
                text:"Diligiencie correctamente el formulario"
            })
        }

      }
      reloadPage() {
      }
      validar(userid:string){
        this.UService.Validar(userid).subscribe((response:any)=>{
          this.estado=response
        })
      }
  }




