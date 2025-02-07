import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomdirectiveDirective } from './customdirectives/customdirective.directive';
import { CustpipePipe } from './custompipes/custpipe.pipe';
import { HostlistenerDirective } from './customdirectives/hostlistener.directive';
import { HostdirectiveDirective } from './customdirectives/hostdirective.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CustomdirectiveDirective,CustpipePipe,HostlistenerDirective,HostdirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentdate : Date = new Date();
     islogged = true;
     username = "Ashrat";

    items = ["Mango","apple","banana"];
    color = 'blue';
    isactive = true;
    price : number = 235;
    percentvalue : number = 0.34;

    str : string = "ashrat is passionate about coding";
    
}
