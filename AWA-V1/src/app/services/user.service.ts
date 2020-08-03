import  { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'
import  { UserModel } from '../models/user.model';
import  { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apikey:string='AIzaSyBgvVVjtq_l7MPkgW-DTDbIknoFJAb4KdY';
  url:string='https://identitytoolkit.googleapis.com/v1';
  usertoken:string;


  constructor(private http:HttpClient) { 
    this.leerToken();
  }

  login(user:UserModel):Observable<any>{

    const autData={
      ...user,
      returnSecureToken:true
    }

    return this.http.post(`${ this.url }/accounts:signInWithPassword?key=${ this.apikey }`,autData)
      .pipe(
          map(resp=>{
            this.guardarToken(resp['idToken']);    
            return resp;
          })
      );

  }

  registrar(user:UserModel){

    const autData={
      ...user,
      returnSecureToken:true
    }

    return this.http.post(`${ this.url }/accounts:signUp?key=${ this.apikey}`,autData)
    .pipe(
      map(resp=>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );

  }

  guardarToken(idtoken:string){
    this.usertoken=idtoken;
   localStorage.setItem('token',idtoken);
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.usertoken=localStorage.getItem('token');
    }
    else{
      this.usertoken='';
    }

    return this.usertoken;
  }

  estaAutenticado(){

    if(this.usertoken.length<2){ return false;}

    return true;

  }

  logout(){
    localStorage.removeItem('token');
  }

}
