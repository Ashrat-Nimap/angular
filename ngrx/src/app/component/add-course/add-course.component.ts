import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseserviceService } from '../../service/courseservice.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  constructor(private courseService : CourseserviceService){}

  addcourseform = new FormGroup({
    cname : new FormControl('',[Validators.required]),
    cdescription : new FormControl('',[Validators.required]),
    cduration  :new FormControl('',[Validators.required]),
    cprice : new FormControl('',[Validators.required])
  })


  addtask(){
    if(this.addcourseform.valid){
      this.courseService.addCourses(this.addcourseform.value).subscribe((res) =>{
        console.log(res);
        this.addcourseform.reset();

      }) 
    }
  }
}
