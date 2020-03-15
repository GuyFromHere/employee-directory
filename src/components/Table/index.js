import React, { Component } from "react";
class Table extends Component{

    handleHeaderClick = (e) => {
        const colId = e.target.id;
        const colCurrentSort = e.target.className;
        const colInfo = {
            col: colId,
            dir: colCurrentSort
        }
         this.props.handleSort(colInfo);
         console.log('table sort ' + colInfo.col + ' ' + colInfo.dir ) 
     }

 render(props) {
        return (
            <table align="center">
				<thead>
                    <tr>
                        <th>Picture</th>
                        <th id="name" className={this.props.dir === "asc" ? "desc" : "asc"} onClick={this.handleHeaderClick}>Name</th>
                        <th id="email" className={this.props.dir === "asc" ? "desc" : "asc"} onClick={this.handleHeaderClick}>Email</th>
                        <th id="phone" className={this.props.dir === "asc" ? "desc" : "asc"} onClick={this.handleHeaderClick}>Phone</th>
                        <th id="cell" className={this.props.dir === "asc" ? "desc" : "asc"} onClick={this.handleHeaderClick}>Cell</th>

                    </tr>
                </thead>
				<tbody>
                {this.props.rows}
				</tbody>
			</table>
        )
    }
}
export default Table;