// Importing module
import * as ShoppingCard from './shoppingCard.js';

console.log(ShoppingCard.cart);


/* 
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
const data = await res.json()

console.log(data);


const getLastPost = async function () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    return { title: data.at(-1).title, text: data.at(-1).body }
}
const lastPost = getLastPost();
console.log(lastPost);

const lastPost2 = await getLastPost()
console.log(lastPost2); */

/////////////////////////////////////////////////////////////
// MODULE PATTERN

const ShoppingCard2 = (function() {
    const cart = []
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };

    const orderStock = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} ordered from supplier (shipping cost is ${shippingCost})`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

ShoppingCard2.addToCart('apple', 4);
ShoppingCard2.addToCart('pizza', 2)

console.log(ShoppingCard2);     // {}
console.log(ShoppingCard2.shippingCost);    // undefined

/////////////////////////////////////////////////////////////
// COMMON JS MODULES (it works in node.js)

// Export
export.addToCart = function(product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
};

// Import
const {addToCart} = required('./shoppingCart.js');
