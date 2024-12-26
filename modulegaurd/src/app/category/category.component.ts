import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private authservice : AuthserviceService){}
  
    onlogout(){
      this.authservice.logout();
    }

}
