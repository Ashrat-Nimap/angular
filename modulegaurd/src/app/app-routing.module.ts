import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authguardGuard } from './guard/authguard.guard';

const routes: Routes = [
  {path : 'login',component:LoginComponent },
  {path : 'register', component:RegisterComponent },
  {path : 'product',loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate:[authguardGuard]},
  {path : 'category', loadChildren : () => import('./category/category.module').then(m=>m.CategoryModule), canActivate:[authguardGuard]},
  {path : '', redirectTo: '/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
