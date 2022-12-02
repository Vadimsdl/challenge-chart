import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { generateOptionsBar } from "../utils";

class BarChart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: 'KD_FS',
            func: generateOptionsBar.bind(this),
            count: 0,
        };

    }

    counting () {
        this.setState((prev) => ({...prev, count: prev.count+1}));
    }

    render() {
        return (
            <div className="main-line-chart">
                <button onClick={this.counting.bind(this)}>{this.state.count ? this.state.count : this.props.title}</button>
                <HighchartsReact highcharts={Highcharts} options={this.state.func()} />
            </div>
        )
    }
}

export default BarChart;
