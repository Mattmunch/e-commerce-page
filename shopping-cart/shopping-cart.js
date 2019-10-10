import renderTableRow from './render-table-row.js';
import dataCars from '../api.js';
import { makePrettyCurrency } from '../common/utils.js';
import { CART_KEY } from '../products/render-car.js';
import { findItemById } from '../common/utils.js';
const tableElement = document.querySelector('tbody');



const addRow = (carOrder, cars) => {
    const orderCar = findItemById(carOrder.id, cars);
    const row = renderTableRow(orderCar, carOrder);

    tableElement.appendChild(row);
};

const addRows = (cart, cars) => {
    cart.forEach(carOrder => {
        addRow(carOrder, cars);
    });
};
const getLineTotal = (order, item) => item.price * order.quantity;
const getCartTotal = (cart, cars) => {
    let cartTotal = 0;
    cart.forEach(order => {
        const orderCar = findItemById(order.id, cars);
        const lineTotal = getLineTotal(order, orderCar);

        cartTotal = cartTotal + lineTotal;
    });

    return cartTotal;
};




const buildTotalCell = (cart, cars) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = getCartTotal(cart, cars);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, cars) => {
    buildTotalCell(cart, cars);
    addRows(cart, cars);
};
const javascriptReadableCart = JSON.parse(localStorage.getItem(CART_KEY));
buildTable(javascriptReadableCart, cars);

