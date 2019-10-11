import { findItemById } from '../common/utils.js';
export const CART_KEY = 'cart';

const initializeEmptyCart = () => {
    const emptyCart = [];
    const serializedEmptyCart = JSON.stringify(emptyCart);
    localStorage.setItem('cart', serializedEmptyCart);
};



// const setCart = (currentCart) => {
//     const serializedNewCart = JSON.stringify(currentCart);
//     localStorage.setItem(CART_KEY, serializedNewCart);
// };

// export const getCart = () => JSON.parse(localStorage.getItem(CART_KEY));


function renderCar(car) {
    const li = document.createElement('li');
    li.className = car.category;
    li.title = car.description;

    const h3 = document.createElement('h3');
    h3.textContent = car.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = car.image;
    img.alt = car.name + ' image';
    li.appendChild(img);

    const pTag = document.createElement('p');
    pTag.className = 'price';

    const usd = car.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // p.textContent = usd;
    const priceTextNode = document.createTextNode(usd);
    pTag.appendChild(priceTextNode);

    const myButton = document.createElement('button');
    myButton.textContent = 'Add to Cart';
    myButton.value = car.id;
    myButton.addEventListener('click', () => {
        let json = localStorage.getItem(CART_KEY);
        let currentCart;

        if (json) {
            currentCart = JSON.parse(json);
        } else {
            currentCart = [];
        }
        
        
        let lineItem = findItemById(currentCart, car.id);
        if (!lineItem) {
            lineItem = {
                id: car.id,
                quantity: 1
            };
            currentCart.push(lineItem);
        } else {
            lineItem.quantity++;
            console.log(lineItem.quantity);
        }
        json = JSON.stringify(currentCart);
        localStorage.setItem(CART_KEY, json);
    }
        

    );

    pTag.appendChild(myButton);

    li.appendChild(pTag);

    return li;

}



export default renderCar;


