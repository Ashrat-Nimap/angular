import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatoryComponent } from './catory/catory.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"catory",
    component:CatoryComponent
  },
  {
    path:"home",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
