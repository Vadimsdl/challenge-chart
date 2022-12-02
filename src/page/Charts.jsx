import React, { Component, Fragment } from 'react';
import LineChart from "../component /LineChart";
import BarChart from "../component /BarChart";


class Charts extends Component {
    render() {
        return (
            <>
                <LineChart/>
                <BarChart title={'press me'}/>
            </>
        )
    }
}

export default Charts;
