//initializeds npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");


// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "",
    //sql database name
    database: "bamazondb"
});

// Creates the connection with the server and loads the product data 
connection.connect(function (err) {
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    (console.log("Connected as id: " + connection.threadId))
    runSearch();
});

//validates input for runSearch prompt
function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    if (integer) {
        return true;
    } else
        return "Please enter a whole number."
};
var runSearch = function () {
    inquirer.prompt([{
        name: "id",
        type: "input",
        validate: validateInput,
        message: "What product ID would you like to buy?",
    }]).then(function (answer) {

        var item = answer.id;
        var quantity = answer.stockQuantity;

        var query = "SELECT * FROM produts WHERE";

        connection.query(queryStr, { id: item }, function (err, data) {
            if (err) throw err;
            if (data.length === 0) {
                console.log("Invalid id");
                runSearch();
            }
            var string = '';
            for (var i = 0; i < data.length; i++) {
                string = '';
                string += 'Item ID: ' + data[i].item_id + '  //  ';
                string += 'Product Name: ' + data[i].product_name + '  //  ';
                string += 'Department: ' + data[i].department_name + '  //  ';
                string += 'Price: $' + data[i].price + '\n';

                console.log(string);
            }

            console.log("---------------------------------------------------------------------\n");

        }
        );

    })

    inquirer.prompt([{
        name: "stockQuantity",
        type: "input",
        validate: validateInput,
        message: "How many units?"
    }]).then(function (answer) {

        var item = answer.id;
        var quantity = answer.stockQuantity;

        var query = "SELECT * FROM produts WHERE";

        connection.query(queryStr, { id: item }, function (err, data) {
            if (err) throw err;
            if (data.length === 0) {
                console.log("Invalid id");
                displayInventory();
            }
      

                  }
                    );
    })
         }
