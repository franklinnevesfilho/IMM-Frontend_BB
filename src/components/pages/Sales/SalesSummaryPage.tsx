import '../../style/Sales.css';
import {useState} from 'react';
import {allSales} from "../../../assets/data/DummyData.tsx";
import BarChart from "../../charts/BarChart.tsx";

function SalesSummaryPage() {

    const [salesData] = useState({
        labels: allSales.map(sale => sale.date.year),
        datasets:[{
            label: "Sales",
            data: allSales.map(sale => Number(sale.total)),
            backgroundColor: "rgba(75, 192, 192, 0.6)",

        }]
    })

    // Analyze the data and create a list of sales for each year and total sales for each year
    const salesList = allSales.map(sale => {
         return (
             <li className={'list-item'}>
                 <p>Year: {sale.date.year} Total: {sale.total}</p>
             </li>
            )
    })



    return (
        <>
            <h1 className={'page-title'}>Sales Summary</h1>
            <div className={'page'}>
                <div className="content">
                    <div className={'sales-bar-chart'}>

                        <BarChart title={'test'} salesData={salesData}/>
                    </div>
                    {/*TODO: Make dynamic*/}
                    <h4>Current Year: 2024</h4>
                    <ul className={'sales-list'}>
                        {salesList}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SalesSummaryPage;
