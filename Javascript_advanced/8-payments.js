
function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderID, amount) {
    console.log(`${orderID} is being processed`);
    processPayment(amount);
    console.log(`${orderID} has been fully processed\n`);
}

console.log(`Processing orders\n`);
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log(`All the orders have been processed`);