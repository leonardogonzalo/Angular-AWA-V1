import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;
  user:UserModel;
  
  constructor(private fb:FormBuilder,private router:Router,private userservice:UserService) { 
    
    this.createform();
  }

  ngOnInit(): void {
  }

  login(){

    Swal.fire({
      text:'Espero por favor..',
      icon:'info'
    });

    Swal.showLoading();

    this.user=this.formulario.value;

    this.userservice.login(this.user)
    .subscribe( resp=>{
      Swal.close();
      console.log(resp);
      this.router.navigate(['home']);

    },er=>{
      Swal.fire({
        text:er,
        icon:'error'
      });
      console.log(er);
    });

    
  }

  createform(){

    this.formulario=this.fb.group({
      email:['leonarddgl@gmail.com'],
      password:[]
    });

  }


}
