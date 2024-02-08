"use client";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {chartData} from "./ChartData.tsx";

function BarChart(props: chartData) {
    return (
        <div className={'chart'}>
            <Bar data={props.salesData} />
            <h3 className={'chart-title'}>{props.title}</h3>
        </div>
);
}

export default BarChart;
