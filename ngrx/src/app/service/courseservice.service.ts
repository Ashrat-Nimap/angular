import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courses } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {
  private api = "http://localhost:3000/courses";

  constructor(private http : HttpClient) { }

  addCourses(coursedata : courses) : Observable<courses>{
    return this.http.post<courses>(this.api,coursedata);
  }

  getAllCourse() : Observable<courses[]>{
    return this.http.get<courses[]>(this.api);
  }
}
