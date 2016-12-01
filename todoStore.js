import { createStore } from 'redux';
import eventsApi from './api/EventsApi';

const defaultEvents = [];
const defaultState = {
  events: defaultEvents,
};

// function getFilteredTodos(allEvents, filter) {
//     return allEvents.filter(event => event.EventId === filter);
// }

function events(state = defaultState, action) {
  console.log('store events reducer caled');
  switch (action.type) {
    case 'EVENTS_ALL':
      return Object.assign({}, state, {
        events: eventsApi.getAllEvents(),
      });
    default:
      return state;
  }
}

export default createStore(events);
