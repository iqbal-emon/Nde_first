let storedItemsArray = JSON.parse(localStorage.getItem("itemsArray"));
let storedTotal = parseFloat(localStorage.getItem("total")) || 0;
console.log(storedItemsArray)
console.log(storedTotal)
let se = document.getElementById('amm');
se.textContent = storedTotal;
const cardContainer = document.getElementById('container');
// const dropdownContent = document.getElementById('dropdownContent');
let cartAdd = [];
let count = 0; // Define count

function showCartDetails() {
  count++;

  storedItemsArray.forEach(item => {
    const cartItem7 = document.createElement('div');
    cartItem7.classList.add('div15');

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
    imageElement.src = item.img;
    imageElement.style.height = '100px';
    imageElement.style.width = '100px';
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
