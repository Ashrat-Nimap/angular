import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[authGuard]},
  {path: 'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path : '', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
