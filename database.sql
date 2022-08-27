-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
-- Database: fs-react-shopping

CREATE TABLE shoppingList (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity DECIMAL(5,2),
	unit VARCHAR (20)
);

INSERT INTO shoppingList (name, quantity, unit)
VALUES ('Bread', '1', 'Loaf');