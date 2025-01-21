import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CourseDetailListComponent } from './component/course-detail-list/course-detail-list.component';
import { counterreducer } from './store/reducer/counter.reducer';
import { AddCourseComponent } from './component/add-course/add-course.component';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {coursereducer } from './store/reducer/course.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailListComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot({ courses : coursereducer})
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
