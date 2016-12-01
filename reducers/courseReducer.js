import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function authorReducer(state = initalState.courses, action){
  switch(action.type){
    case types.CREATE_COURSE:
      // state.push(action.course);
      // return state;
      // debugger;
      return [...state,
        Object.assign({}, action.course)
      ];
    case types.UPDATE_COURSE_SUCCESS:
      // get all the courses from state except the one we are updating and then join that into array.
      // all this workarounds due to immutable state for redux store.
      return [...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
