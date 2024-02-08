import React, { useState } from 'react';
import '../style/ItemSearch.css';
interface Item {
    code: string;
    name: string;
    quantity: number;
}

function ItemSearch() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [items] = useState<Item[]>([
        { code: '001', name: 'Item 1', quantity: 10 },
        { code: '002', name: 'Item 2', quantity: 15 },
        { code: '003', name: 'Item 3', quantity: 8 },
        // Add more items as needed
    ]);

    const filteredItems: Item[] = items.filter(item =>
        `${item.code} ${item.name}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    )

    function handleSearch (e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    return (
        <div className={'container'}>
            <input className={'search-bar'} type="text" placeholder="Search items..."
                value={searchTerm} onChange={handleSearch}/>
            <ul>
                {filteredItems.map(item => (
                    <li key={item.code}>
                        <strong>Code:</strong> {item.code},{' '}
                        <strong>Name:</strong> {item.name},{' '}
                        <strong>Quantity:</strong> {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemSearch;
