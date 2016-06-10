'use strict';

const fs = require('fs');
const listings = JSON.parse("[" + fs.readFileSync('listings.txt', 'utf8').split(/(?={)/g) + "]");
const products = JSON.parse("[" + fs.readFileSync('products.txt', 'utf8').split(/(?={)/g) + "]");
let results = "";

//-----First, delete the results file to work in a new one.
fs.unlink('results.txt', (err) => {
    if (err) throw err;
});

//-----Second,Match the products with the listings
let splitModel = (model, title) => {
    let modelExist = true;
    model.split(" ").forEach(modelPart => {
        if (title.indexOf(modelPart) == -1) modelExist = false;
    });
    return modelExist;
};

products.forEach(product => {
    let arrListings = listings.filter(a => a.title.indexOf(product.manufacturer) > -1 && splitModel(product.model, a.title) == true);
    results += JSON.stringify({"product_name": product.product_name,"listings": arrListings}) + '\n';
});

//-----Finally,Save the results
fs.appendFile('results.txt', results, err => {
    if (err) throw err;
    console.log("The resut was saved in results.txt !");
});
