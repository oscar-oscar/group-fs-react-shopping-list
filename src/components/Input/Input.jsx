import React, { useEffect, useState } from 'react';
import './Input.css';
import axios from 'axios';

function Input() {
    let [shoppingListArray, setShoppingListArray] = useState([]);
//Meaghan TODO -  Use EFFECT 






// Meaghan TODO Axios GET 







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
        </div>
    );
}

export default Input;