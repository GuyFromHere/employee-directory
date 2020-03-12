// takes results as a prop and renders headers and rows.
// implement sort on clickHandler here
import React, { Component } from "react";


class TableRender extends Component {

    state = {
        employees: this.props.employees
    }

    handleEmployeeSort = () => {
        console.log('text TableRender')
        console.log(this.sortRef.id)
    }
    
    render() {
        return (
            <table align="center">
				<thead>
                    <tr>
                        <th>Picture</th>
                        <th onClick={this.handleEmployeeSort} id="first" ref={ref => { this.sortRef = ref; }}>Name</th>
                        <th onClick={this.handleEmployeeSort} id="email" ref={ref => { this.sortRef = ref; }}>Email</th>
                        <th onClick={this.handleEmployeeSort} id="phone" ref={ref => { this.sortRef = ref; }}>Phone</th>
                        <th onClick={this.handleEmployeeSort} id="cell" ref={ref => { this.sortRef = ref; }}>Cell</th>
                    </tr>
                </thead>
				<tbody>
                {this.renderRows}
                
				</tbody>
			</table>
        )
    }
}
export default TableRender;