import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private authservice : AuthserviceService){}

  onlogout(){
    this.authservice.logout();
  }

}
