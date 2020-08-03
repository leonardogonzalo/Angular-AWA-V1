import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  mostrarbanner:boolean=false;
  constructor(private userservice:UserService) { 
    this.mostrarbanner=userservice.estaAutenticado();
  }

  ngOnInit(): void {
  }

}
