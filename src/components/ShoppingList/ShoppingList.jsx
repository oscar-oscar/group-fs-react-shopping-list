import React from 'react';
import './ShoppingList.css';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import Grid from '@mui/material/Grid';


function ShoppingList({ shoppingListArray }) {

    return (
        <div>
            <h5>Shopping List</h5>
            <button>Reset</button>
            <button>Clear</button>
            {/* Mark shoppingList DISPLAY ON DOM */}
            <Grid container spacing={2}>
                {shoppingListArray.map((shoppingItem) => {
                    return <ShoppingListItem
                        key={shoppingItem.id}
                        shoppingItem={shoppingItem}
                    />
                })
                }
            </Grid>
        </div>
    );
}

export default ShoppingList;