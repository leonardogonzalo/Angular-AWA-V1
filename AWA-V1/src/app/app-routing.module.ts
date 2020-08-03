import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { CargaficticioComponent } from './components/cargaficticio/cargaficticio.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path:'login',component:LoginComponent},
  { path:'registro',component:RegistroComponent},
  { path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  { path:'banner',component:BannerComponent},
  { path:'ficticio',component:CargaficticioComponent},
  { path:'**',pathMatch:'full',redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
