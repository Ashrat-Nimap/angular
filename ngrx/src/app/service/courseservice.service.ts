import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {
  private api = "http://localhost:3000/courses";

  constructor(private http : HttpClient) { }

  addCourses(coursedata : any) : Observable<any>{
    return this.http.post(this.api,coursedata);
  }

  getAllCourse() : Observable<any>{
    return this.http.get(this.api);
  }
}
