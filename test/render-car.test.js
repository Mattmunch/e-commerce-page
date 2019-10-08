import renderCar from '../products/render-car.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
QUnit.module('Render Car');
test('renders a car', assert => {
    //Arrange
    // Set up your parameters and expectations
    const mustang = {
        code: 'mustang',
        name: 'Ford Mustang',
        image: '../assets/mustang.jpeg',
        description: "Ford's flagship muscle car",
        category: 'muscle',
        price: 28000
    };
    const expected = `<li class="muscle" title="Ford's flagship muscle car"><h3>Ford Mustang</h3><img src="../assets/mustang.jpeg" alt="Ford Mustang image"><p class="price">$28,000.00<button value="mustang">Add to Cart</button></p></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderCar(mustang);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('renders a table row', assert => {
    //Arrange
    // Set up your parameters and expectations
    const mustang = {
        code: 'mustang',
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
    
    const expected = `<li class="muscle" title="Ford's flagship muscle car"><h3>Ford Mustang</h3><img src="../assets/mustang.jpeg" alt="Ford Mustang image"><p class="price">$28,000.00<button value="mustang">Add to Cart</button></p></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderTableRow(mustang);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('renders table row', assert => {
    //Arrange
    // Set up your parameters and expectations
    const mustang = {
        code: 'mustang',
        name: 'Ford Mustang',
        image: '../assets/mustang.jpeg',
        description: "Ford's flagship muscle car",
        category: 'muscle',
        price: 28000
    };
    
    const expected = `<li class="muscle" title="Ford's flagship muscle car"><h3>Ford Mustang</h3><img src="../assets/mustang.jpeg" alt="Ford Mustang image"><p class="price">$28,000.00<button value="mustang">Add to Cart</button></p></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderTableRow(mustang);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
