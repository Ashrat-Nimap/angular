import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users : any = [];
  constructor(private userservice:UsersService){}

  ngOnInit(): void {
    this.userservice.getusers().subscribe(data =>{
      this.users = data;
    });
    
  }

}
