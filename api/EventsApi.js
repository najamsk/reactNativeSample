// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let events = [];
const apiBasePath = 'http://api.jumpstartpakistan.com/api/v1/';


class EventsApi {
  static getAllEvents() {
    return fetch(apiBasePath)
    .then(response => response.json())
    .then((responseJson) => {
      events = responseJson;
      return events;
    })
    .catch((error) => {
      console.error(error);
    });

    // return new Promise((resolve, reject) => {
    //
    //   resolve(Object.assign([], events));
    //
    //   // setTimeout(() => {
    //   //   resolve(Object.assign([], courses));
    //   // }, delay);
    //
    // });
  }
}

export default EventsApi;
