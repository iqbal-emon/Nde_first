
document.addEventListener("DOMContentLoaded", function () {
    const navbar = `

`;
    
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
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('myDropdown');
cartb.addEventListener('click', () => {
   if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }

});





var cartAdd = [];
// var cartItem = {};

const cardContainer = document.getElementById('container');

cardData.forEach(data => {
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
     cartAdd.push(data);
     showCartDetails();
   
   });
  
  function showCartDetails() {
    const cartItem2 = document.createElement('div');
    cartItem2.classList.add('div2');
  dropdownContent.innerHTML = ''; 
   var total = 0;
  cartAdd.forEach(item => {
  
    const cartItem = document.createElement('div');
    cartItem.classList.add('div1');
    cartItem.textContent = item.name + "=" + item.price;
    var hr = document.createElement('hr');


hr.style.border = '1px solid #ccc';

dropdownContent.appendChild(hr);


    total = total + parseFloat(item.price);
   
    dropdownContent.appendChild(cartItem);
  });

  var button = document.createElement('button');
  button.classList.add('your-button-class'); 
  button.textContent = 'Payment';
  cartItem2.textContent = "Total Amount=" + total + "$";
  button.addEventListener('click', function() {
// Your action or function to be executed when the button is clicked
    // alert('Button clicked!');
    window.open('payment.html?total=' + total, '_blank');
console.log(total);

// Retrieve total from the URL parameters
var urlParams = new URLSearchParams(window.location.search);
var totalFromUrl = urlParams.get('total');
console.log(totalFromUrl);

var Amount = document.getElementById('amount');
if (Amount) {
  // Set the total value in the 'Amount' element
  Amount.innerHTML = totalFromUrl;
} else {
  console.error("Element with id 'amount' not found.");
}
    
});

// Append the button to the dropdownContent
dropdownContent.appendChild(button);
    
    dropdownContent.appendChild(cartItem2);
}








  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(btn12);
    cardContainer.appendChild(card);
  
});

    
});

