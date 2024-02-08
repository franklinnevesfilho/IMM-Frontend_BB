import '../../style/Inventory.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import {useState} from "react";
import FilterModal from "../../miscellaneous/FilterModal.tsx";
import Option from "../../../assets/interfaces/FilterOptions.tsx";
import {dummy_items} from "../../../assets/data/DummyData.tsx";
import ItemCard from "../../miscellaneous/ItemCard.tsx";

function InventoryPage() {
    const [items] = useState(dummy_items);
    const [filterOptions] = useState<Option[]>([
        {
            name: 'Category',
            options: ['Shirt', 'Pants', 'Shoes']},
        {
            name: 'Size',
            options: ['S', 'M', 'L', 'XL']
        },{
            name: 'Color',
            options: ['Red', 'Blue', 'Green']
        },{
            name: 'Manufacturer',
            options: ['Nike', 'Adidas', 'Puma']
        }]);
    const [modal, setModal] = useState<boolean>(false);


    const openModal = () => {
        setModal(true);
    }

    const onSubmit = () => {
        setModal(false);

    }

    const renderFilterOptions = () => {

        return filterOptions.map((option, index) => (
            <div key={index} className={'option'}>
                <h3>{option.name}</h3>
                <select>
                    <option value={''}>All</option>
                    {option.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        ));
    }


    return (
        <>
            <h1 className="page-title">Inventory</h1>
            <div className="page inventory">
                <div className="action-container">
                    <div className="search-container">
                        <input className={'search'} placeholder={'Search'} type="text"/>
                        <div className="filter" onClick={ openModal }>
                            <FilterListIcon/>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn">Create Manufacturer</button>
                        <button className="btn">Create Item</button>
                    </div>
                </div>
                <div className="items">
                    {items.map(item => (
                        <ItemCard key={item.code} item={item} />
                    ))}
                </div>
            </div>
            {
                modal &&
                <FilterModal setOpen={ setModal } onSubmit={ onSubmit }>
                    {renderFilterOptions()}
                </FilterModal>
            }
        </>
    );
}

export default InventoryPage;
