import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseserviceService } from '../../service/courseservice.service';
import { courses } from '../../model/courses';
import { Store } from '@ngrx/store';
import { addcourse } from '../../store/reducer/action/course.action';
import { TosterServiceService } from '../../service/toster-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  constructor(private courseService : CourseserviceService,private store : Store,private toast : TosterServiceService){}

  addcourseform = new FormGroup({
    cname : new FormControl('',[Validators.required]),
    cdescription : new FormControl('',[Validators.required]),
    cduration  :new FormControl('',[Validators.required]),
    cprice : new FormControl(0,[Validators.required])
  })


  addtask(){
    if(this.addcourseform.valid){
      const newcourse = this.addcourseform.value as courses;
      this.courseService.addCourses(newcourse).subscribe((course) =>{
        this.store.dispatch(addcourse({course}));
        this.toast.showSuccess('Added Successfully');
        this.addcourseform.reset();
      }) 
    }
  }
}
