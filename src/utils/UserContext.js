import React from "react";

const UserContext = React.createContext({
    name: "",
    email: "",
    phone: "",
    cell: "",
    gender: "",
    dob: "",
    state: ""
});

export default UserContext;