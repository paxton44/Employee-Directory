//Activity 19 shows how to use axios and a BASEURL for an api call.

import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=25";

console.log(BASEURL);
// const API = {
//     getEmployeeData: function(query) {
//         return axios.get(BASEURL);
//     }
// }

// export default API
export default {
    search: function (query) {
      return axios.get(BASEURL);
    },
  };