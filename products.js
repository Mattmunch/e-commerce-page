import cars from './cars.js';
import renderCar from './render-car.js';

const list = document.getElementById('fruits');

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const dom = renderCar(car);
    list.appendChild(dom);
}