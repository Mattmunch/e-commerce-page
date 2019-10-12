export const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            });

export const findItemById = (cars, id) => {
    
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        if (car.id === id) {
            return car;
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
export function calcCartTotal(cart, cars) {
    let cartTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const car = findItemById(cars, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, car.price);
        cartTotal += lineTotal;
    }

    return makePrettyCurrency(cartTotal);
}





