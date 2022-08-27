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
        <p className="test">Add an Item</p>

    // Mark shoppingList DISPLAY ON DOM





    );
}

export default Input;