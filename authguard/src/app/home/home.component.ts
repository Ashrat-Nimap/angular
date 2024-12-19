import { Component } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private userservice : UserserviceService){}

  onlogout(){
      this.userservice.logout();
  }

}
