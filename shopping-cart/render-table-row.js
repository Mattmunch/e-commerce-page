import { makePrettyCurrency } from '../common/utils.js';



const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};



export default (car, cart) => {
    const tableRow = document.createElement('tr');
    const totalPrice = cart.quantity * car.price;
    const prettyPrice = makePrettyCurrency(car.price);
    const prettyTotal = makePrettyCurrency(totalPrice);


    const columnOne = makeTd(car.name);
    const columnTwo = makeTd(cart.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);



    return tableRow;

};