import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:UserModel;
  formulario:FormGroup;

  constructor( private fb:FormBuilder, private userservice:UserService,private router:Router) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  registrarUser(){
    
    Swal.fire({
      allowOutsideClick:false,
      text:'Espere por favor...',
      icon:'info'
    });
    
    Swal.showLoading();

    this.user=this.formulario.value;
    this.userservice.registrar(this.user)
    .subscribe(resp=>{
      Swal.fire({
        text:`Se registro correctamente ${ this.user.nombre }`,
        icon:'info'
      });
      this.router.navigate(['home']);    
      
    },er=>{
      Swal.fire({
        text:er.error.error.message,
        icon:'error'
      });
      
    });
    

  }

  createForm(){
    this.formulario=this.fb.group({
      nombre:[],
      email:[],
      password:[]
    });
  }

}
