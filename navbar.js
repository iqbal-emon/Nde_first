document.addEventListener("DOMContentLoaded", function () {
    const navbar = `<nav class="navbar">
            <div class="navbar2">
                <a href="#ca">HOME</a>
                <a href="#allproduct">PRODUCTS</a>
                <a href="#le">NEW</a>
                <a href="#container4">RECENT</a>
                <a href="#container3">BLOG</a>
            </div>
            <div class="navbar3">
                <input type="text" id="searchInput" style="margin-left: 10px; border:2px solid black; border-radius: 10px;">
                <div id="searchResults"></div>
                <img id="cartbutton" class="images" src="./image/cart.png" alt="" width="22" height="22">
                <div class="dropdown-content" id="myDropdown"></div>
            </div>
            <button onclick="topFunction()" id="myBtn" title="Go to top"><img src="./image/card/arrow.png" alt="" width="15" height="15"></button>
        </nav>
        <div class="Carousel" id="ca">
        <img class="img1" src="./image/caro1.jpg" width="100%" height="600" alt="">
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
 `;

    const navbarContainer = document.getElementById("nav1");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }

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

        cards.forEach((card, index) => {
            const cardInfo = cardData[index];
            console.log(cardInfo.name);
            console.log("The name is " + name2);
            if (cardInfo.name == name2) {
                card.scrollIntoView();
            }
        });
    }

    // Add the onkeyup event listener to the search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.onkeyup = filterNames;
    }
});
