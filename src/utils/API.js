import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us";

export default {
	getEmployees: function() {
		return axios.get(BASEURL)
	},
	getEmployeesFilter: function(filter) {
		if (typeof filter !== "undefined") {
			console.log('api filter for: ' + filter.filterKey)
			return axios.get(BASEURL +  "&" + filter.filterKey + "=" + filter.filterValue)
		} else {
			console.log('api filter undefined? ')
			console.log(filter.filterKey)
			console.log(filter.filterValue)
		}
	}

};
