import {Line} from "react-chartjs-2";
import {chartData} from "./ChartData.tsx";
import './Chart.css';

function LineChart(props: chartData) {
    return (
        <div className={'chart'}>
            <Line data={props.salesData}/>
            <h3 className={'chart-title'}>{props.title}</h3>
        </div>
);
}

export default LineChart;