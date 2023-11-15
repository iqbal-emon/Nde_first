document.addEventListener("DOMContentLoaded", function () {
    const navbar = `<nav class="navbar">
            <div class="navbar2">
                <a id="navbar-link1" href="#ca">HOME</a>
                <a id="navbar-link2" href="#allproduct">PRODUCTS</a>
                <a id="navbar-link3" href="#le">NEW</a>
                <a id="navbar-link4" href="#container4">RECENT</a>
                <a id="navbar-link5" href="#container3">BLOG</a>
            </div>
            <div class="navbar3">
                <input type="text" id="searchInput" style="margin-left: 10px;  border-radius: 10px;">
<img id="search1" src="./image/search.png" alt="">
                
                <div id="searchResults"></div>
                <p id="Count"></p>
                <img id="cartbutton" class="images" src="./image/cart.png" alt="" width="25" height="25">
                <div class="dropdown-content" id="myDropdown"></div>
            </div>

        </nav>
        <div class="Carousel" id="ca">
        <img class="img1"  width="100%" height="600" alt="">
        <div class="text-caro1">
            <h2 class="allpro" id="monospace">New Inpsiration 2023</h2>
            <h1 class="word-animation">
                <span>CLOTHING</span>
                <span>MADE</span>
                <span>FOR</span>
                <span>YOU!</span>
            </h1>
            <h3 class="allpro" id="monospace">Trending from men and women style collection</h3>

            <div class="btn">
                <button class="btn1">SHOP WOMEN'S</button>
                <button class="btn2">SHOP MEN'S</button>
            </div>
        </div>
  
      </div>
       <div id="first">
        <div class="Carousel" id="ca">
            <img class="img1"  width="97%" height="600" alt="">
            <div class="text-caro1">
                <h2 class="allpro" id="monospace">New Inpsiration 2023</h2>
                <h1 class="word-animation">
                    <span>CLOTHING</span>
                    <span>MADE</span>
                    <span>FOR</span>
                    <span>YOU!</span>
                </h1>
                <h3 class="allpro" id="monospace">Trending from men and women style collection</h3>

                <div class="btn">
                    <button class="btn1">SHOP WOMEN'S</button>
                    <button class="btn2">SHOP MEN'S</button>
                </div>
            </div>
        </div>

    </div>
 `;

    const navbarContainer = document.getElementById("nav1");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
  }
 const navbarLinks = document.querySelectorAll('.navbar2 a');

    const handleLinkClick = (event) => {
        // event.preventDefault();

        // Reset the color of all links to white
        navbarLinks.forEach(link => {
            link.style.color = 'white';
        });

        // Set the color of the clicked link to blue
        event.target.style.color = 'rgb(15, 181, 255)';
    };

    // Add click event listener to each link in the '.navbar2' container
    navbarLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });



 // Select the .img1 element
var imageElement = document.querySelector(".img1");

// Set the src attribute to './image/caro1.jpg'
imageElement.src = './image/caro1.jpg';

// Select the .Carousel element
  var carouselElement = document.getElementById("ca");
var carouselElement1 = document.getElementById("first");
// Append the modified imageElement to the .Carousel element
  carouselElement.appendChild(imageElement);
  carouselElement1.appendChild(carouselElement);

    // Your card data here
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

  
  
  
  
  
    // Function to filter names
    function filterNames() {
        const input = document.getElementById('searchInput');
        const filter = input.value.toUpperCase();
        const resultsContainer = document.getElementById('searchResults');

        if (filter === '') {
            resultsContainer.innerHTML = ''; // Clear the results container
            return;
        }

        const filteredNames = cardData.filter(item => item.name.toUpperCase().includes(filter));

        resultsContainer.innerHTML = '';
        filteredNames.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerText = item.name;
            resultItem.onclick = function () {
                showAndScrollToCard(item.name);
            };
            resultsContainer.appendChild(resultItem);
        });
    }

    // Function to show and scroll to card
function showAndScrollToCard(name2) {
    var searchResults = document.getElementById('searchResults');
    const cards = document.querySelectorAll('.card');
    const filter = document.getElementById('searchInput').value.toUpperCase();
    searchResults.innerHTML = '';

    console.log("Filter value: " + filter);  // Log the filter value to debug

    cards.forEach((card, index) => {
        const cardInfo = cardData[index];

        if (cardInfo.name === name2) {
            // Show the card that matches the search
        // Show the card that matches the search
      card.style.display = 'block';
      card.style.marginLeft = 'auto'; // Center horizontally
      card.style.marginRight = 'auto'; // Center horizontally
      card.style.marginTop = '10px'; // Center vertically
      card.style.marginBottom = 'auto'; // Center vertically
      card.scrollIntoView({ block: 'center', inline: 'center' });

            // Check if the search input is empty or null
            if (!filter) {
                // Show all cards when search is null or empty
                cards.forEach((card) => {
                    card.style.display = 'block';
                });
            }
        } else {
            // Hide other cards
            card.style.display = 'none';
        }
    });
}

// Function for keyup event
function handleKeyup() {
    filterNames();
}

// Function for keydown event
function handleKeydown() {
    requestAnimationFrame(showAllCards);  // Use requestAnimationFrame for smoother updates
}

// Function to show all cards
function showAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
       card.style.display = 'inline-block';
        card.style.marginBottom = '10px'; // Add some margin between cards for better spacing
    });
}


// Add the onkeyup and onkeydown event listeners to the search input
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.onkeyup = handleKeyup;
    searchInput.onkeydown = handleKeydown;
}



let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Assuming you want to attach the topFunction to a button click
if (mybutton) {
  mybutton.addEventListener("click", topFunction);
}
  

});
