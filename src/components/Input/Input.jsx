import React, { useEffect, useState } from 'react';
import './Input.css';
import axios from 'axios';

function Input() {
    let [shoppingListArray, setShoppingListArray] = useState([]);
//Meaghan TODO -  Use EFFECT 
    useEffect(() => {
        console.log('useEffect - page load')
        fetchShoppingList();
    }, []); 





// Meaghan TODO Axios GET 
    const fetchShoppingList = () => {
        axios({
            method: 'GET',
            url: '/shopping-list',
        }).then(response => {
            setShoppingListArray(response.data);
        }).catch(error => {
            console.log(error);
            alert('Something went wrong!');
        })
    }






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