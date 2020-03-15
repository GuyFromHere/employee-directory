import React from 'react';

const SortContext = React.createContext({
    column: "name",
    direction: "asc",
    handleSort: () => {}
})

export default SortContext;