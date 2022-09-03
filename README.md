# React Shopping List

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


### TODO

### Database setup
Meaghan
- [X] Create database name fs-react-shopping 
- [X] Create table : name, quantity, unit 
- [X] Insert sample data for testing GET
- [ ] Create a form component
- [ ] Add header "Add an Item"
- [ ] In Form.jsx create item/quantity/unit inputs with save button that call `addListItem`


### JSX 
Mark
- [X] create input & shopping list component 
- [X] return add an item(mark)
- [ ] Create `ShoppingListItem` component
- [ ] Refactor shopping list map to the list item component
- [ ] add reset and clear button - no function yet in ShoppingList?
- [ ] Add buy and remove buttons - no function yet in ShoppingListItem
- [ ] pass required props
- [ ] add base MUI cards/other styling


### Router Setup
Oscar
- [x] create router to link to pool.js (shopping.router)
- [x] comment out space for GET,POST,PUT,DELETE
- [x] write GET route in shopping.router (oscar)
- [X] write useEffect (Meaghan)
- [X] write axios in input.jsx (Meaghan)
- [X] write return for .map in Input.jsx to display onto DOM (Mark)
- [ ] in App.jsx create axios POST `addListItem`
- `itemName`, `itemQuantity`, `itemUnit` and `setItemName`... etc, use state = `''`
- [ ] return `Form` component
- [ ] pass props through `Form` component