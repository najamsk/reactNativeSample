import * as types from './actionTypes';
import eventsApi from '../api/EventsApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events };
}


export function loadEvents() {
  console.log('inside actions LoadEvents fn');
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return eventsApi.getAllEvents().then((events) => {
      dispatch(loadEventsSuccess(events));
    }).catch((error) => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
//
// export function saveCourse(course) {
//   return function (dispatch, getState) {
//     dispatch(beginAjaxCall());
//     return eventsApi.saveCourse(course).then(course => {
//       course.id ? dispatch (updateCourseSuccess(course)) :
//       dispatch(createCourseSuccess(course));
//     }).catch(error => {
//       //throw(error);
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }
