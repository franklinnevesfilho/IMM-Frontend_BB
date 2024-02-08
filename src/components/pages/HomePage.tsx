import '../style/Home.css';
import BarChart from "../charts/BarChart.tsx";
import {Link} from "react-router-dom";
import LineChart from "../charts/LineChart.tsx";
import React, {useState} from "react";
import Item from "../../assets/schema/item.tsx";
import {dummy_items} from "../../assets/data/DummyData.tsx";
function HomePage(props: {title: string}) {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [items] = useState<Item[]>(dummy_items);

    // Dummy data for charts
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets:[{
            label: "Sales",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgb(155,216,229)",
        }]
    }
    // Dummy data for charts
    const incomeData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets:[{
            label: "Income",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgb(155,216,229)",
        }]
    }
    const filteredItems: Item[] = items.filter(item =>
        `${item.code} ${item.name}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    )
    const totalQuantity = (item: Item) => {
        let total = 0;
        item.sizes.forEach((size: { quantity: number; }) => {
            total += size.quantity;
        });
        return total;
    }
    function handleSearch (e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }


    return (
        <>
            <h1 className={'page-title'}>{props.title}</h1>
            <div className={'page'}>
                <div className="home-content">
                    <h2>Monthly Review</h2>
                    <div className="chart-container">
                        <BarChart title={'Sales'} salesData={salesData}/>
                        <LineChart title={'Income'} salesData={incomeData}/>
                    </div>
                    <div className={'btn-container'}>
                        <Link to={'/invoices/create'} className="btn btn-home">Create Invoice</Link>
                        <Link to={'/inventory/create'} className="btn btn-home">Add Item to Inventory</Link>
                        <Link to={'/customer/create'} className="btn btn-home">Create Customer</Link>
                        <Link to={'/inventory/create-manufacturer'} className="btn btn-home">Create Manufacturer</Link>
                    </div>
                    <div className={'search-container'}>
                        <div className="search-bar">
                            <h4>Inventory Search</h4>
                            <input type="text" placeholder="Search items..." value={searchTerm} onChange={handleSearch}/>
                        </div>
                        <table className={'item-table'}>
                            <thead className={'header'}>
                            <tr>
                                <th className={'col-1'}>Code</th>
                                <th className={'col-2'}>Name</th>
                                <th className={'col-3'}>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredItems.map(item => (
                                <tr className={'row'} key={item.code}>
                                    <td className={'col-1'}>{item.code}</td>
                                    <td className={'col-2'}>{item.name}</td>
                                    <td className={'col-3'}>{totalQuantity(item)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
