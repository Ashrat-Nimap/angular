import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailListComponent } from './component/course-detail-list/course-detail-list.component';
import { AddCourseComponent } from './component/add-course/add-course.component';

const routes: Routes = [
  {
    path : 'allcourses',
    component : CourseDetailListComponent
  },
  {
    path : 'addcourse',
    component : AddCourseComponent
  },
  {
    path : " ",
    redirectTo : '/addcourse'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
