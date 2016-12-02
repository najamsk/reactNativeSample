import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function eventReducer(state = initalState.events, action) {
  switch (action.type) {
    case types.LOAD_EVENTS_SUCCESS:
      return action.events;
    default:
      return state;
  }
}
