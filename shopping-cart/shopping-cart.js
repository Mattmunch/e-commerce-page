import renderTableRow from './render-table-row.js';
import cars from '../api.js';
import { cart } from '../api.js';
import { makePrettyCurrency } from '../common/utils.js';

const tableElement = document.querySelector('tbody');


let cartTotal = 0;
cart.forEach(carOrder => {
    cars.forEach(cars => {
        let carTotal;

        if (cart.id === carOrder.id) {
            const row = renderTableRow(cars, carOrder);


            tableElement.appendChild(row);

            carTotal = cars.price * carOrder.quantity;

            cartTotal = cartTotal + carTotal;
        }
    });

    const totalCell = document.getElementById('order-total-cell');
    totalCell.textContent = makePrettyCurrency(cartTotal);
});