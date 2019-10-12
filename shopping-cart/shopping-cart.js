import renderTableRow from './render-table-row.js';
import dataCars from '../api.js';
import { makePrettyCurrency, findItemById, calcCartTotal,} from '../common/utils.js';
import { CART_KEY } from '../products/render-car.js';

const javascriptReadableCart = JSON.parse(localStorage.getItem(CART_KEY));
const addRows = (cart, cars) => {
    cart.forEach(carOrder => {
        addRow(carOrder, cars);
    });
};

const cartTotal = calcCartTotal(javascriptReadableCart, dataCars);

makePrettyCurrency(cartTotal);


const buildTotalCell = (cart, cars) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = calcCartTotal(javascriptReadableCart, cars);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};
const tableElement = document.querySelector('tbody');

const addRow = (carOrder, cars) => {
    
    const orderCar = findItemById(cars, carOrder.id);
    // const actualOrder = calcLineTotal(carOrder.quantity, orderCar.price);

    const row = renderTableRow(orderCar, carOrder);
    tableElement.appendChild(row);
    

};
const buildTable = (cart, cars) => {
    addRows(cart, cars);
    buildTotalCell(cart, cars);
};
// calcLineTotal(javascriptReadableCart.quantity, javascriptReadableCart.price);
buildTable(javascriptReadableCart, dataCars);







