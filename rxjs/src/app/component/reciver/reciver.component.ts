import { Component, OnInit } from '@angular/core';
import { SubjectserviceService } from '../../service/subjectservice.service';

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrl: './reciver.component.css'
})
export class ReciverComponent implements OnInit {
  subjectdata! : string;
  behavioursubject! : string;
  constructor(private subjectservice : SubjectserviceService){}
  
  ngOnInit(): void {
    this.subjectservice.getsubject().subscribe((data : any) =>{
      this.subjectdata = data;
    });

    this.subjectservice.getbehavioursubject().subscribe((data) =>{
      this.behavioursubject = data;
    })
    
  }

}
