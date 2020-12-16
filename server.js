const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/products", function(req, res){
    const products = [
        {
            item: "Shoes",
            price: "£60.00",
            description: "Black shoes"
        },
        {
            item: "Macbook Pro",
            price: "£1,500.00",
            description: "Laptop computer"
        },
        {
            item: "Book",
            price: "£12.00",
            description: "Latest novel"
        },
        {
            item: "Fan",
            price: "£100.00",
            description: "Metal desk fan"
        }
    ]

    res.send(products);
});

app.post("/submit", function(req, res){
    console.log(req.body);
});

app.listen(3000, function(){
    console.log(`Server running on port 3000`);
});