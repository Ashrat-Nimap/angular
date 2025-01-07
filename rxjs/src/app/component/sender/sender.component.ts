import { Component } from '@angular/core';
import { SubjectserviceService } from '../../service/subjectservice.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  inputdata! : string;
  constructor(private subjectservice : SubjectserviceService){}

  senddata(){
    this.subjectservice.senddata(this.inputdata);
  }

}
