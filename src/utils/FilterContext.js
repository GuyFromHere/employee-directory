import React from 'react';

const FilterContext = React.createContext({
    filterKey: "gender",
    filterValue: "male",
    handleFilter: () => {}
})

export default FilterContext;