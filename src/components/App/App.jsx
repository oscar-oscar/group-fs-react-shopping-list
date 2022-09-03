import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx';
import './App.css';
import Form from '../Form/Form.jsx';
import Container from '@mui/material/Container';



function App() {
    let [shoppingListArray, setShoppingListArray] = useState([]);
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('');

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
    //Oscar Axios POST

    const addListItem = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/shopping-list',
            data: {
                name: itemName,
                quantity: itemQuantity,
                unit: itemUnit
            }
        }).then(response => {
            //clear form in puts
            setItemName('');
            setItemQuantity('');
            setItemUnit('');
            //fetch shopping list
            fetchShoppingList();
        }).catch(error => {
            console.log(error);
            alert('something wrong in POST');
        });
    }

    return (
        <Container className="App">
            <Header />
            <Form addListItem={addListItem}
                itemName={itemName}
                setItemName={setItemName}
                itemQuantity={itemQuantity}
                setItemQuantity={setItemQuantity}
                itemUnit={itemUnit}
                setItemUnit={setItemUnit}
            />
            <ShoppingList
                shoppingListArray={shoppingListArray}
            />
        </Container>
    );
}

export default App;
