import renderCar from '../render-car.js';

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
    const expected = `<li class="muscle" title="Ford's flagship muscle car"><h3>Ford Mustang</h3><img src="assets/mustang.jpeg" alt="Blue Mustang image"><p class="price">$28,000<button value="mustang">Add</button></p></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderCar(mustang);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
