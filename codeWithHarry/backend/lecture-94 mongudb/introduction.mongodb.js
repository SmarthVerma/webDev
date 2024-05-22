

use('video94');

// Insert a few documents into the sales collection.
db.getCollection('books').insertMany([
  { 'item': 'time management', 'price': 1011, 'quantity': 2, 'date': new Date() },
  { 'item': 'tommorow is a mystery', 'price': 290, 'quantity': 1, 'date': new Date() },
  { 'item': 'dogs in street', 'price': 501, 'quantity': 10, 'date': new Date() },
  { 'item': 'crazy mind', 'price': 645, 'quantity': 20, 'date': new Date() },
  { 'item': 'limitless', 'price': 153, 'quantity': 10, 'date': new Date() },
  { 'item': 'reached infinity', 'price': 751, 'quantity': 5, 'date': new Date() }

]);


// Print a message to the output window.
console.log(`learning new things!`);

