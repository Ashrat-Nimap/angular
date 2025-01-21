import { createAction, props } from "@ngrx/store";
import { courses } from "../../../model/courses";


export const loadcourse = createAction('[course] Load courses')

export const loadcourseSuccess = createAction(
    '[course] Load course success',
    props<{courses : courses[]}>()
);

export const addcourse = createAction(
    '[course] Add Course',
    props<{course : courses}>() 
)
