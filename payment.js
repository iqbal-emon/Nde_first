let storedItemsArray = JSON.parse(localStorage.getItem("itemsArray"));



const cardContainer = document.getElementById('container');
// const dropdownContent = document.getElementById('dropdownContent');
let cartAdd = [];


function showCartDetails() {
    count++;

  storedItemsArray.forEach(item => {
    const cartItem7 = document.createElement('div');
    cartItem7.classList.add('div11');

    const cartItem4 = document.createElement('div');
    cartItem4.classList.add('div8');

    const cartItem = document.createElement('div');
    cartItem.classList.add('div1');
    cartItem.textContent = item.name;

    const cartItem3 = document.createElement('div');
    cartItem3.classList.add('div9');
    cartItem3.textContent = item.price;

    const cartItem5 = document.createElement('div');
    cartItem5.classList.add('div10');

    const imageElement = document.createElement('img');
    imageElement.src = item.backgroundImage;
    imageElement.style.height = '40px';
    imageElement.style.width = '40px';
    imageElement.style.marginTop = '2%';
    imageElement.style.borderRadius = '10%';

    cartItem5.appendChild(imageElement);

    cartItem4.appendChild(cartItem);
    cartItem4.appendChild(cartItem3);

    cartItem7.appendChild(cartItem5);
    cartItem7.appendChild(cartItem4);

    cardContainer.appendChild(cartItem7);

  });
}


showCartDetails();
