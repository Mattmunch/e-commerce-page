import { findItemById } from '../common/utils.js';
export const CART_KEY = 'cart';
const emptyCart = [{ id: 'apple', quantity: 1 }];
const initializeEmptyCart = () => {
    const serializedCart = JSON.stringify(emptyCart);
    localStorage.setItem('cart', serializedCart);
};

const setCart = (currentCart) => {
    const serializedNewCart = JSON.stringify(currentCart);
    localStorage.setItem(CART_KEY, serializedNewCart);
};

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY));

export const incrementInCartById = (id, cart) => {
    let thereIsAMatch = false;
    cart.forEach(order => {
        if (order.id === id) {
            order.quantity++;
            thereIsAMatch = true;
        }
    });

    if (thereIsAMatch) {
        return;
    } else {
        const newItem = {
            id: id,
            quantity: 1,
        };
        cart.push(newItem);
    }

};



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
    myButton.value = car.id;
    myButton.addEventListener('click', () => {
        
        let currentCart = getCart();
        
        if (!currentCart) {
            initializeEmptyCart();
            currentCart = getCart();
        }
        let carToIncrement = findItemById(car.id, currentCart);
        carToIncrement && carToIncrement.quantity++;
        
        setCart(currentCart);
        
    });
    pTag.appendChild(myButton);

    li.appendChild(pTag);

    return li;
    
}



export default renderCar;


