import React, { Component } from "react";
import Employees from "./pages/Employees";
import NavBar from "./pages/NavBar";

class EmployeeContainer extends Component {
	state = {
		currentPage: "Home"
	};

	handlePageChange = page => {
		this.setState({ currentPage: page })
	}

	// keep for search if added
	handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

	// When the form is submitted, search the Giphy API for `this.state.search`
	handleFormSubmit = event => {
		event.preventDefault();
		//this.searchEmployees(this.state.search);
	};

  renderPageChange = () => {
    if ( this.state.currentPage === "Home" ) {
      return <Home />; 
    } else if ( this.state.currentPage === "About" ) {
      return <About />; 
    } else if ( this.state.currentPage === "Employees" ) {
      return <Employees />; 
    }
  }

  render() {
    return (
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
		Test
        {this.renderPageChange()}
      </div>
    );
  }
}
}

export default EmployeeContainer;
