import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  message:string = " ";
  private timerId:any;
  isTimerActive: boolean = false;
  
  ngOnInit(): void {
    this.starttimer();
    console.log("AppComponent initialized.");
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // if(this.timerId){
    //   clearInterval(this.timerId);
    // } 

    this.stopTimer();
  }

  starttimer(): void{
    this.timerId = setInterval(()=>{
      this.message = `1 minute passed ${new Date().toLocaleTimeString()}`;
    },60000)
  }

  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId); // Clears the interval
      this.isTimerActive = false; // Timer is stopped
      this.message = 'Timer stopped';
      console.log(this.message);
    }
    
  }

  

}
