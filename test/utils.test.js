
import cars from '../api.js';
import { findItemById, calcLineTotal, calcCartTotal } from '../common/utils.js';


// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

QUnit.module('Utilities');

test('find item using id', assert => {


    const id = 'mustang';
    const expected = {
        category: 'muscle',
        description: `Ford's flagship muscle car`,
        id: 'mustang',
        name: 'Ford Mustang',
        image: '../assets/mustang.jpeg',
        price: 28000
    };

    const foundCar = findItemById(cars, id);

    assert.deepEqual(foundCar, expected);
});

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundCar = findItemById(cars, id);

    // assert
    assert.equal(foundCar, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

    // act 
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate order total', (assert) => {
    // arrange
    const expected = '$299,000.00';
    const cart = [{
        id: 'mustang',
        quantity: 2,
    }, {
        id: 'subSti',
        quantity: 3,
    }, {
        id: 'nissanGtr',
        quantity: 1,
    }];

    const cars = [{
        id: 'nissanGtr',
        name: 'Nissan GTR',
        image: '../assets/nissanGTR.jpg',
        description: "Nissan's most sought after sports car",
        category: 'import',
        price: 114000
    }, {
        id: 'subSti',
        name: 'Subaru STI',
        image: '../assets/subaruSTI.jpg',
        description: "Subaru's most popular sports car",
        category: 'import',
        price: 43000
    }, {
        id: 'mustang',
        name: 'Ford Mustang',
        image: '../assets/mustang.jpeg',
        description: "Ford's flagship muscle car",
        category: 'muscle',
        price: 28000
    }];

    // act
    const orderTotal = calcCartTotal(cart, cars);

    // assert
    assert.equal(orderTotal, expected);
});
