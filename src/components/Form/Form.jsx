

function Form({addListItem, itemName, itemQuantity, itemUnit, setItemName, setItemQuantity, setItemUnit}) {
    return (
    <div>
        <h5>Add an item</h5>
    
        <form onSubmit={addListItem}>
            <label htmlFor="item-input">Item:</label>
            <input value={itemName} id="item-input" onChange={e => setItemName(e.target.value)} />
            <label htmlFor="quantity-input">Quantity:</label>
            <input value={itemQuantity} id="quantity-input" onChange={e => setItemQuantity(e.target.value)} />
            <label htmlFor="unit-input">Unit:</label>
            <input value={itemUnit} id="unit-input" onChange={e => setItemUnit(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    </div>

    )
}

export default Form;