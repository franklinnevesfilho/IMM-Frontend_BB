import {dummy_items} from "../../../assets/data/DummyData.tsx";
import {useParams} from "react-router-dom";
import '../../style/SelectedItem.css';
import Item from "../../../assets/schema/item.tsx";
import dressPic from "../../../assets/image/sampleDressPic.jpg";

function SelectItemPage() {
    const items = dummy_items;
    const {id} = useParams();
    const item = items.find((item) => item.code === id);


    const availableSizes = (sizes: {size: string, color: string, quantity: number}[]) => {
        // if quantity is bigger than 0 then return the size
        return sizes.filter((size) => size.quantity > 0).map((size) => {
            return `${size.size}`;
        }).join(' , ');
    }
    const availableColors = (sizes: {size: string, color: string, quantity: number}[]) => {
        // if quantity is bigger than 0 then return the color
        return sizes.filter((size) => size.quantity > 0).map((size) => {
            return `${size.color}`;
        }).join(' , ');
    }

    const itemDetails = (item: Item) => {
        return (
            <div className={'item display'}>
                <div className="item-image">
                    <img src={dressPic} alt={item.name}/>
                </div>

                <div className="details">
                    <div className="detail">
                        <div className="label">Code :</div>
                        <div className="value">{item.code}</div>
                    </div>
                    <div className="detail">
                        <div className="label">Manufacturer :</div>
                        <div className="value">{item.manufacturer}</div>
                    </div>
                    <div className="detail">
                        <div className="label">Total Quantity :</div>
                        <div className="value">{item.sizes.reduce((acc, size) =>{
                            return acc + size.quantity }, 0).toString()}</div>
                    </div>
                    <div className="detail">
                        <div className="label">Available Sizes :</div>
                        <div className="value">{ availableSizes( item.sizes ) }</div>
                    </div>
                    <div className="detail">
                        <div className="label">Colors Available :</div>
                        <div className="value">{ availableColors(item.sizes) }</div>
                    </div>
                    <div className="detail">
                        <div className="label">Selling at :</div>
                        <div className="value">${item.sellingPrice}</div>
                    </div>
                    <div className="detail">
                        <div className="label">Purchased at :</div>
                        <div className="value">${item.purchasedPrice}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {
                item ? (
                    <>
                        <h1 className="page-title">{item.name}</h1>
                        <div className="page item-selected">
                            <div className="item-details">
                                {itemDetails(item)}
                            </div>
                            <div className="item-selected action-container">
                                <button className={'edit'}>Edit</button>
                                <button className={'delete'}>Delete</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1>Item not found</h1>
                )
            }
        </>
    );
}

export default SelectItemPage;