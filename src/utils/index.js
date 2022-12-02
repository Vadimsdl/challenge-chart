import {
    canada_dgp,
    china_dgp,
    dates,
    japan_dgp,
    KD_FS,
    MM_KD,
    region_codes,
    south_korea_gdp,
    usa_gdp
} from '../mockData/index';
import Highcharts from "highcharts";

const SI_SYMBOL = ["", "k", "M", "B"];

const abbreviateNumber = (number) => {
    const tier = Math.log10(Math.abs(number)) / 3 | 0;
    if (tier === 0) return number;
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    return scaled.toFixed(1) + suffix;
}

export const generateOptionsLine = (type = 'line') => ({
    chart: {
        type: type,
    },
    tooltip: {
        formatter: function () {
            return abbreviateNumber(this.point.y)
        }
    },
    yAxis: [{
        title: {
            text: 'KD_FS'
        },
    }, {
        title: {
            text: 'MM_KD'
        },
        opposite: true
    }],
    xAxis: [{
        type: 'datetime',
        categories: dates,
        labels: {
            rotation: -45,
            formatter: function () {
                return Highcharts.dateFormat('%d-%m-%Y', this.value);
            }
        },

    }],
    series: [
        {
            name: 'KD_FS',
            yAxis: 0,
            data: KD_FS,
        },
        {
            name: 'MM_KD',
            yAxis: 1,
            data: MM_KD,
        },
    ],
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },

});

export const generateOptionsBar = (type = 'bar') => ({
    chart: {
        type: type,
    },
    tooltip: {
        formatter: function () {
            const region = this.series.name === 'usa_gdp' || this.series.name === 'canada_dgp' ? region_codes[0] : region_codes[1];
            return 'Region: ' + region + '<br/> Country name: ' + this.series.name;
        }
    },
    yAxis: [{
        title: {
            text: 'GDP'
        },
    }],
    xAxis: [{
        title: {
            text: 'countries'
        },
    }],
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        x: -40,
        y: -80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    series: [
        {
            name: 'usa_gdp',
            data: [usa_gdp],
        },
        {
            name: 'canada_dgp',
            data: [canada_dgp],
        },
        {
            name: 'china_dgp',
            data: [china_dgp],
        },
        {
            name: 'japan_dgp',
            data: [japan_dgp],
        },
        {
            name: 'south_korea_gdp',
            data: [south_korea_gdp],
        },
    ],
});

