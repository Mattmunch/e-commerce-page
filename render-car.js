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

    const p = document.createElement('p');
    p.className = 'price';

    const usd = car.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // p.textContent = usd;
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = car.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderCar;