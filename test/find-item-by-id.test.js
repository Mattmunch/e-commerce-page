
import cars from '../api.js';
import { findItemById } from '../common/utils.js';


// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
QUnit.module('Render Car');

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
