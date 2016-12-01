import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createCourse(course){
  //return {type: 'CREATE_COURSE', course: course}; below is short form supported by es6
  // debugger;
  // console.log('types=' + types);
  return {type: types.CREATE_COURSE, course};
}
export function loadCoursesSuccess(courses){
  //return {type: 'CREATE_COURSE', course: course}; below is short form supported by es6
  // debugger;
  // console.log('types=' + types);
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}
export function updateCourseSuccess(course){
  //return {type: 'CREATE_COURSE', course: course}; below is short form supported by es6
  // debugger;
  // console.log('types=' + types);
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}
export function createCourseSuccess(course){
  //return {type: 'CREATE_COURSE', course: course}; below is short form supported by es6
  // debugger;
  // console.log('types=' + types);
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCourses(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch (updateCourseSuccess(course)) :
      dispatch(createCourseSuccess(course));
    }).catch(error => {
      //throw(error);
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
