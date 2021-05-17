//Activity 19 shows how to use axios and a BASEURL for an api call.

import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=25";

console.log(BASEURL);


//normally wed need an api key but the provided api is open source and doesn't require a key! 
// const APIKEY = "&apikey=trilogy";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: function (query) {
        return axios.get(BASEURL + query);
        
    }
    
};
