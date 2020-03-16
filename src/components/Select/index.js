import React, { useContext } from 'react';
import './style.css';
import FilterContext from '../../utils/FilterContext';

function Select () {
   const {handleFilter} = useContext(FilterContext)

    const handleFilterClick = (e) => {  
        const filter = {
            filterKey: e.target[e.target.selectedIndex].dataset.key,
            filterValue: e.target.value
        };
        {handleFilter(filter)};
    }

    return (
        <div id="selectFilter">
            <span>Filter:</span>
            <select onChange={handleFilterClick}>
                <option className="dropdown default">None</option>
                <option className="dropdown option" data-key="gender" value="male">Male</option>
                <option className="dropdown option" data-key="gender" value="female">Female</option>
            </select>
        </div>
    )
}    

export default Select