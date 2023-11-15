
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
    count++;
     cartAdd.push(data);
     showCartDetails();
   
   });
  
  function showCartDetails() {
    const cartItem2 = document.createElement('div');
    cartItem2.classList.add('div2');
  dropdownContent.innerHTML = ''; 
    var total = 0;
    let itemsArray = [];
  cartAdd.forEach((item,index) => {
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
    cartItem4.appendChild(cartItem);
    cartItem4.appendChild(cartItem3);

    // cartItem.style.paddingBottom = '2px';
    const cartItem5 = document.createElement('div');
    cartItem5.classList.add('div10');
const imageElement = document.createElement('img');
imageElement.src = item.backgroundImage;
 // You can set a meaningful alt text for accessibility
imageElement.style.height = '40px';
    imageElement.style.width = '40px';
    imageElement.style.marginTop = '2%';
    imageElement.style.borderRadius = '10%';
    imageElement.style.paddingLeft = '5px';
    // Append the image element to the cartItem
const cartItem12 = document.createElement('button');
    cartItem12.classList.add('div13');
    cartItem12.textContent = 'X';
    // cartItem12.style.backgroundColor = 'red';
    cartItem12.addEventListener('click', () => {
      count--;
      console.log("Enter");
            console.log(item);

            // Remove the item from cartAdd array at the current index
            cartAdd.splice(index, 1);
      console.log(cartAdd);
            // Update the displayed cart items
            showCartDetails();
   
   });



    let pr = document.createElement('p');
    pr.innerText = "hello";
cartItem5.appendChild(imageElement);

cartItem7.appendChild(cartItem5); 
cartItem7.appendChild(cartItem4);
//  cartItem7.appendChild(pr);
    cartItem7.appendChild(cartItem12);

dropdownContent.append(cartItem7);
var hr = document.createElement('hr');
hr.style.border = '1px solid #ccc';
dropdownContent.appendChild(hr);



total = total + parseFloat(item.price);
    
    

// Use forEach to iterate over the array of strings

  // Split the string into an array using the comma as a separator
  // var itemComponents = itemString.split(',');

  // Create an object with the components
  var itemObject = {
    name: item.name,
    price: parseFloat(item.price),
    img:  item.backgroundImage
  };

  // Push the object into the itemsArray
    itemsArray.push(itemObject);
    console.log(itemsArray);

    // dropdownContent.appendChild(cartItem4);
  
  });

  var button = document.createElement('button');
  button.classList.add('your-button-class'); 
  button.textContent = 'Order';
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
 localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
    Count1.innerHTML = count;
// Append the button to the dropdownContent
 localStorage.setItem("total", total.toString());

dropdownContent.appendChild(cartItem2);
dropdownContent.appendChild(button);
}







  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(btn12);
    cardContainer.appendChild(card);
  
   
});
    
});

