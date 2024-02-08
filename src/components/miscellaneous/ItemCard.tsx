import Item  from '../../assets/schema/item.tsx';
import { useNavigate } from "react-router-dom";


// make the prop an object of the Item interface name item
function ItemCard(prop: {item: Item}) {
    const navigate = useNavigate();
    const redirect = (path: string) => {
        navigate(path);
    }

    const detail = (description: string, value: string) =>{
        return (
            <div className={'detail'}>
                <div className="label">{description} :&nbsp;</div>
                <div className="value">{value}</div>
            </div>
        )}

    return (
        <div className={'card'} onClick={()=> redirect('/inventory/' + prop.item.code)}>
            <h3 className={'title'}>{prop.item.name}</h3>
            <img className={'img'} src="src/assets/image/sampleDressPic.jpg" alt={prop.item.name}/>
            <div className="body">
                {detail('Code', prop.item.code)}
                {detail('Manufacturer', prop.item.manufacturer)}
                {detail('Total Quantity', prop.item.sizes.reduce((acc, size) =>{
                   return acc + size.quantity }, 0).toString())}
                {detail('Selling at', `$${prop.item.sellingPrice}`)}
                {detail('Purchased at', `$${prop.item.purchasedPrice}`)}
            </div>
        </div>
    );
}

export default ItemCard;