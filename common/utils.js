export const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            });

export const findItemById = (items, id) => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
};


export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}


function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}
export function calcOrderTotal(cart, cars) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const car = findItemById(cars, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, car.price);
        orderTotal += lineTotal;
    }

    return makePrettyCurrency(orderTotal);
}





