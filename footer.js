
document.addEventListener("DOMContentLoaded", function () {
    const navbar = `  <div class="extra">
            <h2>EXTRAS</h2>
            <p id="hh">Brands</p>
            <p id="hh">Gift CErtificates</p>
            <p id="hh">Affiliate</p>
            <p id="hh">Specials</p>
            <p id="hh">Site Map</p>
        </div>
        <div>
            <h2>INFORMATION</h2>
            <p id="hh">About Us</p>
            <p id="hh">Privacy Policy Terms & Conditions</p>
            <p id="hh">Contact Us</p>
            <p id="hh">Specials</p>
            <p id="hh">Site Map</p>
        </div>
        <div>
            <h2>MY ACCOUNT</h2>
            <p id="hh">Order History</p>
            <p id="hh">Wish List</p>
            <p id="hh">NewSletter</p>
            <p id="hh">Returns</p>
        </div>

        <div>
            <h2>Nde,Steel Limited,Banani</h2>
            <p id="hh">Nde@gmail.com</p>
            <p id="hh">016868486</p>
            <p id="hh">Dhaka,Bangladesh </p>

        </div>
`;
    
    const navbarContainer = document.getElementById("footer1");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }
const cardDatac2 = [
  {
    backgroundImage: './image/caro1.jpg'
  }
];


var last = document.querySelector(".img1");
last.src = cardDatac2[0].backgroundImage;


    
});
