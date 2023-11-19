document.addEventListener("DOMContentLoaded", function () {
  const navbar = ` 
    <div id="container"></div>
    <div class="di">
        <h1>Amount</h1>
        <h1 id="amm"></h1>
        <button class="paynow">Pay Now</button>
    </div>
  `;

  const navbarContainer = document.querySelector(".scroll1");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbar;
  }

  let storedItemsArray = JSON.parse(localStorage.getItem("itemsArray")) || [];
  let storedTotal = parseFloat(localStorage.getItem("total")) || 0;
  let storedQuantity = JSON.parse(localStorage.getItem("counts")) || [];

  let se = document.getElementById('amm');
  se.textContent = storedTotal;
  const cardContainer = document.getElementById('container');
  let count = 0; // Define count

  function showCartDetails() {
    count++;

    // Create a map to store cumulative quantity and total price for each unique item
    const itemMap = new Map();

    storedItemsArray.forEach(item => {
      const { name, price, img } = item;
      const quantity = storedQuantity[name] || 0;

      // Skip items with quantity 0
      if (quantity === 0) {
        return;
      }

      // Add the item to the map
      itemMap.set(name, {
        CountQuantity: quantity, // Use quantity for the specific item
        totalPrice: price * quantity, // Use quantity for the specific item
        name,
        price,
        img,
      });
    });

    // Clear the container before rendering
    cardContainer.innerHTML = '';

    // Render the items based on the map
    itemMap.forEach(item => {
      const cartItem7 = document.createElement('div');
      cartItem7.classList.add('div15');

      const cartItem4 = document.createElement('div');
      cartItem4.classList.add('div8');

      const cartItem = document.createElement('div');
      cartItem.classList.add('div1');
      cartItem.textContent = item.name;

      const cartItem3 = document.createElement('div');
      cartItem3.classList.add('div9');
      cartItem3.textContent = item.price + " X " + item.CountQuantity; // Display the exact quantity for the specific item
    
      const cartItem5 = document.createElement('div');
      cartItem5.classList.add('div10');

      const imageElement = document.createElement('img');
      imageElement.src = item.img;
      imageElement.style.height = '100px';
      imageElement.style.width = '100px';
      imageElement.style.marginTop = '2%';
      imageElement.style.borderRadius = '10%';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete-btn');
      deleteButton.addEventListener('click', () => handleDelete(item.name, item.price));

      cartItem5.appendChild(imageElement);
      cartItem4.appendChild(cartItem);
      cartItem4.appendChild(cartItem3);
      cartItem4.appendChild(deleteButton);

      cartItem7.appendChild(cartItem5);
      cartItem7.appendChild(cartItem4);

      cardContainer.appendChild(cartItem7);
    });
  }

  function handleDelete(itemName, itemPrice) {
    // Implement logic to handle the delete button click
    // This logic should decrease the quantity or remove the item if quantity is zero
    // Update total price, quantity, and re-render the cart
    if (storedQuantity[itemName] > 0) {
      storedQuantity[itemName]--;
      storedTotal -= itemPrice;
      se.textContent = storedTotal;
    }

    showCartDetails();
  }

  showCartDetails();
  localStorage.clear();
});
