import  cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";
const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: { loggedIn: true }
}

const stateClone = Object.assign({}, state);


const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);


state.user.loggedIn = false
console.log(stateClone);

