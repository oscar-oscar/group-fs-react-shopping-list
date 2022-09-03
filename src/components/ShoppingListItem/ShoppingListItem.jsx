import './ShoppingListItem.css';

function ShoppingListItem({ shoppingItem }) {

    return (
        <li>Item Name: {shoppingItem.name}, Item Quantity: {shoppingItem.quantity}, Item Unit: {shoppingItem.unit}</li>
    )

}

export default ShoppingListItem;