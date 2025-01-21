import { inject } from "@angular/core";
import { CourseserviceService } from "../../service/courseservice.service";
import { createReducer, on, props, State } from "@ngrx/store";
import { courses } from "../../model/courses";
import { loadcourseSuccess } from "./action/course.action";



export const intialState = [];

export const coursereducer = createReducer(
    intialState,
    on(loadcourseSuccess,(state,{courses})=>({
        ...state,
        courses
    }))

)