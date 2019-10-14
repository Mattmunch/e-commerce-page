import renderTableRow from './render-table-row.js';
import dataCars from '../api.js';
import { makePrettyCurrency, findItemById, calcCartTotal, calcLineTotal } from '../common/utils.js';
import { CART_KEY } from '../products/render-car.js';
const orderTotalCell = document.getElementById('order-total-cell');
// const placeOrderButton = document.getElementById('place-order');


const cartContents = document.getElementById('cart-import');
const tableElement = document.querySelector('tbody');

//Takes
const addRow = (carOrder, cars) => {
    console.log('in add row');
    const orderCar = findItemById(carOrder.id, cars);
    const row = renderTableRow(orderCar, carOrder);

    tableElement.appendChild(row);

};

let cart = JSON.parse(localStorage.getItem(CART_KEY));
const addRows = (cart, cars) => {
    console.log('in add rows');

    cart.forEach(carOrder => {
        addRow(carOrder, cars);
    });
};
calcLineTotal(cart.quantity, cart.price);



const buildTotalCell = (cart, cars) => {
    console.log('in build total');
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = calcCartTotal(cart, cars);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, cars) => {
    addRows(cart, cars);
    buildTotalCell(cart, cars);
};
let cartTotal;
for (let i = 0; i < cart.length; i++) {
    const lineRow = cart[i];
    const quantity = cart[i].quantity;
    const car = findItemById(dataCars, lineRow.id);
    const dom = renderTableRow(car, lineRow.id);
    cartTotal = cartTotal + calcLineTotal(quantity, car.price);

    cartContents.appendChild(dom);
    orderTotalCell.textContent = cartTotal;



    buildTable(cart, dataCars);
}



