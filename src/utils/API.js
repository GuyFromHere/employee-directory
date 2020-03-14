import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us";

export default {
	getEmployees: function() {
		return axios.get(BASEURL)
		/* axios.get(BASEURL)
			.then(res => {				
				const newArr = res.data.results.map(item=> {
						return {
							name: item.name.first,
							email: item.email
						}
					})
					console.log('AXIOS get')
					console.log(newArr)
					return newArr;
			}); */
	}
};
