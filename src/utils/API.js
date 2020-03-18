import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us";
const TEMPURL = 'http://localhost:4000/api/?results=50&nat=us';
/* Download the code.
Unzip folder.
Modify the settings.json file port to something like 4000 or 5000 - whatever port your react app is not running on.
Start your mongo.
Then from the project root do npm install.
Then npm start.
http://localhost:4000/api/?results=200&nat=us */

export default {
	getEmployees: function() {
		//return axios.get(BASEURL)
		return axios.get(TEMPURL)
	},
	getEmployeesFilter: function(filter) {
		if (typeof filter !== "undefined") {
			console.log('api filter for: ' + filter.filterKey)
			//return axios.get(BASEURL +  "&" + filter.filterKey + "=" + filter.filterValue)
			return axios.get(TEMPURL +  "&" + filter.filterKey + "=" + filter.filterValue)
		} else {
			console.log('api filter undefined? ')
			console.log(filter.filterKey)
			console.log(filter.filterValue)
		}
	}

};
