import React from 'react';
import './ShoppingList.css';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';


function ShoppingList({shoppingListArray}) {

    return (
        <div>
            <p className="test">Add an Item</p>
            {/* Mark shoppingList DISPLAY ON DOM */}
            <ul>
                {shoppingListArray.map((shoppingItem) => {
                    return <li key={shoppingItem.id}>Item Name: {shoppingItem.name}, Item Quantity: {shoppingItem.quantity}, Item Unit: {shoppingItem.unit}</li>
                    })
                }
            </ul>
            <ShoppingListItem />
        </div>
    );
}

export default ShoppingList;