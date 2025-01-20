import { Component } from '@angular/core';
import { CourseserviceService } from '../../service/courseservice.service';

@Component({
  selector: 'app-course-detail-list',
  templateUrl: './course-detail-list.component.html',
  styleUrl: './course-detail-list.component.css'
})
export class CourseDetailListComponent {

  courseList : any;

  constructor(private courseervice : CourseserviceService){}


  getcourse(){
    this.courseervice.getAllCourse().subscribe((res) =>{
      this.courseList = res;
    })
  }



}
