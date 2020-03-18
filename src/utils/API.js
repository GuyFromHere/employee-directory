import axios from "axios";

// Published randomuser API
const BASEURL = "https://randomuser.me/api/?results=10&nat=us";
// local database API
const TEMPURL = 'http://localhost:4000/api/?results=50&nat=us';

export default {
	getEmployees: function() {
		// Swap the comments on the next two lines to use the randomuser API
		//return axios.get(BASEURL)
		return axios.get(TEMPURL)
	},
	getEmployeesFilter: function(filter) {
		// Swap the comments on the next two lines to use the randomuser API
		//return axios.get(BASEURL +  "&" + filter.filterKey + "=" + filter.filterValue)
		return axios.get(TEMPURL +  "&" + filter.filterKey + "=" + filter.filterValue)
	}

};
