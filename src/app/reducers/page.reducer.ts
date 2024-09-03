import { createReducer, on } from '@ngrx/store';
import { nextPage, prePage, reset } from '../actions/page.action';

export const initialState = 1;

export const pageReducer = createReducer(
  initialState,
  on(nextPage, (state) => state + 1),
  on(prePage, (state) => (state > 1 ? state - 1 : 1)),
  on(reset, (state) => 1)
);
