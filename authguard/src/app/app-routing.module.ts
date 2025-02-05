import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth/auth.guard';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent, loadChildren : ()=> import('./home/home.module').then(m => m.HomeModule),  canActivate:[authGuard],title : 'Home Page'},
  {path: 'login',component:LoginComponent,title : 'Login Page'},
  {path:'register', component:RegisterComponent,title : 'Register Page'},
  {path : 'category',component : CategoryComponent,title : 'Category Page'},
  {path : '', redirectTo:'/login', pathMatch:'full',},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
