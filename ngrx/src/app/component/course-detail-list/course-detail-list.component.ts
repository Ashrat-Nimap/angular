import { Component, OnInit } from '@angular/core';
import { CourseserviceService } from '../../service/courseservice.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadcourseSuccess } from '../../store/reducer/action/course.action';
import { courses } from '../../model/courses';

@Component({
  selector: 'app-course-detail-list',
  templateUrl: './course-detail-list.component.html',
  styleUrl: './course-detail-list.component.css'
})
export class CourseDetailListComponent implements OnInit {

  courses$ : Observable<courses[]>;
  constructor(private courseervice : CourseserviceService,private store : Store){
    this.courses$ = store.select((state : any) => state.courses.courses);
  }

  ngOnInit(): void {
      // this.courseList$ = this.courseervice.getAllCourse();
      this.courseervice.getAllCourse().subscribe((courses) => {
        this.store.dispatch(loadcourseSuccess({courses}))
      })
  }

  // getcourse(){
  //   this.courseervice.getAllCourse().subscribe((res) =>{
  //     this.courseList$ = res;
  //   })
  // }



}
