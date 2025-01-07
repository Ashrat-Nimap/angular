import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectserviceService {


  
  private subjectdata = new Subject();
  private bheavioursubjectdata = new BehaviorSubject('initial value');

  senddata(data:string){
    this.subjectdata.next(data);
    this.bheavioursubjectdata.next(data);
  }

  getsubject(){
    return this.subjectdata.asObservable();
  }

  getbehavioursubject(){
    return this.bheavioursubjectdata.asObservable();
  }
  constructor() { }

}
