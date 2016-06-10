# Match-Product-Listings
Match product listings from a 3rd party retailer, against a set of known products.

This is a challenge from Sortable. The goal is to match product listings from a 3rd party retailer, e.g. “Nikon D90 12.3MP Digital SLR Camera (Body Only)” against a set of known products, e.g. “Nikon D90”.They provide me with a set of products and a set of price listings matching some of those products. The task is to match each listing to the correct product. Precision is critical.They prefer missed matches (lower recall) over incorrect matches, so i have to try hard to avoid false positives. A single price listing may match at most one product.

I wrote the code with JavaScript es6/es2015, because have some nice feature and shorter syntax for the code. Right now, es6/es2015 is not by default installed, i have had to use the node.js module called babeljs  for transpile to es5 (the default version).

####To run the solution (first you will need Node.js to run it):

1) Clone the repository. </br>
2) From your Bash enter to the Match Product Listing folder </br>
3) Type ```npm install```  (babeljs will be downloaded) </br>
4) Type ```node App.js``` </br>
