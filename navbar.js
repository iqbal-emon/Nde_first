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
                <input placeholder="Search" type="text" id="searchInput" style="margin-left: 10px;  border-radius: 10px;">

<button id="search1"></button>
                
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

<div class="bubbles">
  <img src="./image/bubble.png">
  <img src="./image/bubble.png">
  <img src="./image/bubble.png">
  <img src="./image/bubble.png">
  <img src="./image/bubble.png">
  <img src="./image/bubble.png">
  <img src="./image/bubble.png">


          </div>

        </div>
  
      </div>
       <div id="first">
        <div class="Carousel" id="ca">
            <img class="img1"  width="97%" height="600" alt="">
            <div class="text-caro1">
                <h2  id="monospace">New Inpsiration 2023</h2>
                <h1 class="word-animation">
                    <span>CLOTHING</span>
                    <span>MADE</span>
                    <span>FOR</span>
                    <span>YOU!</span>
                </h1>
                <div><h3  id="monospace">
                Trending from men and women style collection</h3>
</div>
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
      // var linkTag = document.getElementsByTagName("a");
      
        // Reset the color of all links to white
      navbarLinks.forEach(link => {
       
          // link.style.color = 'white';
      link.style.borderBottom = 'none';
          
        });
event.target.style.paddingBottom = '10px';
        // Set the color of the clicked link to blue
      event.target.style.borderBottom = '4px solid white';
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
    name: 'Shoe',
    price:'4000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: ' T-shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/hoodie.jpg',
    name: 'Hoodie',
    price:'4000$'
    },
    {
       backgroundImage: './image/card/shoe2.jpg',
    name: 'Girl shoe',
    price:'3000$'
    },
     {
    backgroundImage: './image/card/winter.jpg',
   name: 'Boys Winter Cloth',
    price:'2000$'
  },
  {
    backgroundImage: './image/card/Pants.jpg',
    name: 'Men Pants ',
    price:'2000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men seventh  shirt',
    price:'3000$'
    },
    {
       backgroundImage: './image/card/Denim (1).jpg',
    name: 'Men Denim',
    price:'2000$'
    },
     {
    backgroundImage: './image/card/Child.jpg',
    name: 'Child Dress',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men thirdlast shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/Girls Cap (1).jpg',
    name: 'Girls Cap',
    price:'1000$'
    },
    {
       backgroundImage: './image/card/Boys.jpg',
    name: 'Men Cap',
    price:'1000$'
  }
  
];
  
  // Function to filter names
function filterNames() {
  const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll('.card');
    const containerDiv = document.getElementById('container'); // Replace 'container' with your actual container div ID

    cards.forEach((card, index) => {
        const cardInfo = cardData[index];
        const cardName = cardInfo.name.toUpperCase();

        if (cardName.includes(filter) || filter === '') {
            card.style.display = 'inline-block';
            containerDiv.scrollIntoView({ });
        } else {
          card.style.display = 'none';
            containerDiv.scrollIntoView({ });
        }
    });

    // Scroll to the container div after filtering
}

// Function to handle button click
function handleSearchButtonClick() {
    filterNames();
}

// Add the onclick event listener to the search1 button
const search1Button = document.getElementById('search1');
if (search1Button) {
    search1Button.onclick = handleSearchButtonClick;
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
