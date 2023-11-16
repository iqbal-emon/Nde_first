
document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
  

`;
    // Create the div element with class "titie" and id "allproduct"
const titleDiv = document.createElement('div');
titleDiv.classList.add('titie');
titleDiv.id = 'allproduct';

// Create the h2 element with class "allpro"
const heading = document.createElement('h2');
heading.classList.add('allpro');
heading.textContent = 'All Products';

// Append the h2 element to the div element
titleDiv.appendChild(heading);

// Append the entire titleDiv to the document body (you can replace document.body with another parent element if needed)

    const navbarContainer = document.getElementById("middle");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }
const cardData = [
  {
    backgroundImage: './image/card/shoe1.jpg',
    name: 'Men first shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men second shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men third shirt',
    price:'3000$'
    },
    {
       backgroundImage: './image/card/shoe2.jpg',
    name: 'Men fourth shirt',
    price:'3000$'
    },
     {
    backgroundImage: './image/card/shoe1.jpg',
   name: 'Men fifth shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men sixth shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men seventh  shirt',
    price:'3000$'
    },
    {
       backgroundImage: './image/card/shoe2.jpg',
    name: 'Men eighten shirt',
    price:'3000$'
    },
     {
    backgroundImage: './image/card/shoe1.jpg',
    name: 'Men fourthlast shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men thirdlast shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men secondlast shirt',
    price:'3000$'
    },
    {
       backgroundImage: './image/card/shoe2.jpg',
    name: 'Men last shirt',
    price:'3000$'
  }
  
];

const cartb = document.getElementById('cartbutton');
const Count1 = document.getElementById('Count');
const dropdownContent = document.getElementById('myDropdown');
cartb.addEventListener('click', () => {
   if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }

});
let count = 0;
let cartAdd = [];
let counts = {};
const cardContainer = document.getElementById('container');
let itemsArray = []; // Move the initialization outside the function
  cardContainer.appendChild(titleDiv);
// Retrieve stored counts from local storage
const storedCounts = localStorage.getItem('counts');
if (storedCounts) {
  counts = JSON.parse(storedCounts);
}

function showCartDetails() {
  const cartItem2 = document.createElement('div');
  cartItem2.classList.add('div2');
  dropdownContent.innerHTML = '';
  let total = 0;

  const uniqueItems = Array.from(new Set(cartAdd.map(item => item.name)));

  uniqueItems.forEach(itemName => {
    const itemInstances = cartAdd.filter(item => item.name === itemName);
    const item = itemInstances[0];

    const cartItem4 = document.createElement('div');
    cartItem4.classList.add('div8');
    const cartItem7 = document.createElement('div');
    cartItem7.classList.add('div11');
    const cartItem = document.createElement('div');
    cartItem.classList.add('div1');
    const cartItem3 = document.createElement('div');
    cartItem3.classList.add('div9');
    cartItem.textContent = item.name;
    cartItem3.textContent = item.price;

    const quantityDisplay = document.createElement('span');
    const quantity = counts[item.name] || 1;
    quantityDisplay.textContent = `X ${quantity}`;
    cartItem3.appendChild(quantityDisplay);

    cartItem4.appendChild(cartItem);
    cartItem4.appendChild(cartItem3);

    const cartItem5 = document.createElement('div');
    cartItem5.classList.add('div10');
    const imageElement = document.createElement('img');
    imageElement.src = item.backgroundImage;
    imageElement.style.height = '40px';
    imageElement.style.width = '40px';
    imageElement.style.marginTop = '2%';
    imageElement.style.borderRadius = '10%';
    imageElement.style.paddingLeft = '5px';

    const cartItem12 = document.createElement('button');
    cartItem12.classList.add('div13');
    cartItem12.textContent = 'X';
    cartItem12.addEventListener('click', () => {
      count--;
      counts[item.name] = (counts[item.name] || 1) - 1;
      cartAdd.splice(cartAdd.indexOf(item), 1);
      showCartDetails();
      updateLocalStorage();
    });

    cartItem5.appendChild(imageElement);
    cartItem7.appendChild(cartItem5);
    cartItem7.appendChild(cartItem4);
    cartItem7.appendChild(cartItem12);

    dropdownContent.appendChild(cartItem7);
    var hr = document.createElement('hr');
    hr.style.border = '1px solid #ccc';
    dropdownContent.appendChild(hr);

    total += parseFloat(item.price) * quantity;

    // Push item details into itemsArray
    itemsArray.push({
      name: item.name,
      price: parseFloat(item.price),
      img: item.backgroundImage,
      quantity: quantity
    });
  });

  var button = document.createElement('button');
  button.classList.add('your-button-class');
  button.textContent = 'Order';
  cartItem2.textContent = 'Total Amount=' + total ;
  button.addEventListener('click', function () {
    window.location.href = 'payment.html';
  });

  localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
  Count1.innerHTML = count;
  localStorage.setItem('total', total.toString());

  dropdownContent.appendChild(cartItem2);
  dropdownContent.appendChild(button);
}

function updateLocalStorage() {
  // Update local storage with the current counts
  localStorage.setItem('counts', JSON.stringify(counts));
}

cardData.forEach((data) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const imageElement = document.createElement('img');

  imageElement.src = data.backgroundImage;
  imageElement.height = 200;
  imageElement.width = 300;
  imageElement.style.borderRadius = '10px';
  cardContainer.style.marginLeft = '100px';
  const title = document.createElement('h2');

  title.textContent = data.name;

  const subtitle = document.createElement('h2');
  subtitle.textContent = data.price;
  const btn12 = document.createElement('button');
  btn12.classList.add('btn12');
  btn12.textContent = 'add to cart';
  btn12.addEventListener('click', () => {
    count++;
    counts[data.name] = (counts[data.name] || 0) + 1;
    cartAdd.push(data);
    showCartDetails();
    updateLocalStorage();
    console.log('Counts:', counts);
  });

  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(btn12);
  cardContainer.appendChild(card);
});

  });
