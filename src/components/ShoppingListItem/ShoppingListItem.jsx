import './ShoppingListItem.css';

function ShoppingListItem({ shoppingItem }) {

    return (
        <div>
            <li>Item Name: {shoppingItem.name}, Item Quantity: {shoppingItem.quantity}, Item Unit: {shoppingItem.unit}</li>
            <button>Buy</button>
            <button>Remove</button>
        </div>
    )

}

export default ShoppingListItem;