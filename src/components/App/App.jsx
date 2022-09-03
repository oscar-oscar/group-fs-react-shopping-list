import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx';
import './App.css';



function App() {
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
        <div className="App">
            <Header />
            <ShoppingList 
                shoppingListArray={shoppingListArray}
            />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
