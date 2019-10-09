import renderCar from '../products/render-car.js';
import renderTableRow from '../shopping-cart/render-table-row.js';



// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
QUnit.module('Render Car');
test('renders a table row', assert => {
    //Arrange
    // Set up your parameters and expectations
    const mustang = {
        id: 'mustang',
        name: 'Ford Mustang',
        image: '../assets/mustang.jpeg',
        description: "Ford's flagship muscle car",
        category: 'muscle',
        price: 28000
    };

    const mustangOrder = {
        id: 'mustang',
        quantity: 4,
    };

    const expected = '<tr><td>Ford Mustang</td><td>4</td><td>$28,000.00</td><td>$112,000.00</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderTableRow(mustang, mustangOrder);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

