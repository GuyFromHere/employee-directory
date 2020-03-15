import React, { Component } from 'react';
import UserContext from '../../utils/UserContext';

class Select extends Component {

    render() {

        return (
            <select>
                <option selected>None</option>
                <option>
                    Gender
                    <ul>
                        <li>Male</li>
                        <li>Female</li>
                    </ul>
                </option>
                <option>
                    Location
                    {/* loop through locations from results...adding test data*/}
                    <ul>
                        <li>Oregon</li>
                        <li>Washington</li>
                    </ul>
                </option>
            </select>
        )
    }
}

export default Select