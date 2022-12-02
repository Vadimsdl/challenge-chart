import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { generateOptionsLine} from "../utils";

class LineChart extends Component {
    render() {
        return(
            <div className="main-line-chart">
                <HighchartsReact highcharts={Highcharts} options={generateOptionsLine()} />
            </div>
        )
    }
}

export default LineChart;
