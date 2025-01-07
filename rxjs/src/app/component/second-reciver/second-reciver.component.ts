import { Component } from '@angular/core';
import { SubjectserviceService } from '../../service/subjectservice.service';

@Component({
  selector: 'app-second-reciver',
  templateUrl: './second-reciver.component.html',
  styleUrl: './second-reciver.component.css'
})
export class SecondReciverComponent {
  subjectdata! : string;
    behavioursubject! : string;
    subscribe = false;
    constructor(private subjectservice : SubjectserviceService){}
    
    subscribbedata(){
      this.subjectservice.getsubject().subscribe((data : any) =>{
        this.subjectdata = data;
      });
  
      this.subjectservice.getbehavioursubject().subscribe((data) =>{
        this.behavioursubject = data;
      })
      
      this.subscribe = true;
    }

}
