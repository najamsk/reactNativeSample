// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let events = [];
const apiBasePath = 'http://api.jumpstartpakistan.com/api/v1/';


class EventsApi {
  static getAllEvents() {
    const endpoint = apiBasePath + '/events';
    console.log('getAllEvents called');
    return fetch(endpoint)
    .then(response => response.json())
    .then((responseJson) => {
      console.log('api get all reponse');
      console.log(responseJson);
      events = responseJson;
      return events;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export default EventsApi;
