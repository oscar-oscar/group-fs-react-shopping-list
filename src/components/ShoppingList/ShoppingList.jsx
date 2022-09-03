import React from 'react';
import './ShoppingList.css';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';


function ShoppingList({ shoppingListArray }) {

    return (
        <div>
            <p>Add an Item</p>
            {/* Mark shoppingList DISPLAY ON DOM */}
            <ul>
                {shoppingListArray.map((shoppingItem) => {
                    return <ShoppingListItem
                        key={shoppingItem.id}
                        shoppingItem={shoppingItem}
                    />
                })
                }
            </ul>
        </div>
    );
}

export default ShoppingList;