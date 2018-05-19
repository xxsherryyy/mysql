
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(6,2) NOT NULL,
stock_quantity INTEGER(6) NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM bamazondb.products;

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Legos", "Toys", 40.50, 248);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("LeCruset", "Kitchen", 39.99, 99); 
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Battery", "Electronics", 10.99, 2000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Avengers", "Movies", 10.00, 3287); 
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Water", "Food", 12.50, 5000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Harry Potter", "Books", 14.25, 7039);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Perfume", "Beauty", 40.00, 180);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Jeans", "Clothing", 50.75, 1894);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Tennis Ball", "Pets", 2.99, 180);