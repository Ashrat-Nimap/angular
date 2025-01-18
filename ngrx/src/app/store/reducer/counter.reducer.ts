import { createReducer,on } from "@ngrx/store";
import { decrement, increment, reset } from "./action/couter.actions";



export const intialState = 0;

export const counterreducer = createReducer(
    intialState,
    on( increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state: any) => 0)
);

