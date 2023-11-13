
document.addEventListener("DOMContentLoaded", function () {
    const navbar = `  <div class="extra">
            <h2>EXTRAS</h2>
            <p>Brands</p>
            <p>Gift CErtificates</p>
            <p>Affiliate</p>
            <p>Specials</p>
            <p>Site Map</p>
        </div>
        <div>
            <h2>INFORMATION</h2>
            <p>About Us</p>
            <p>Privacy Policy Terms & Conditions</p>
            <p>Contact Us</p>
            <p>Specials</p>
            <p>Site Map</p>
        </div>
        <div>
            <h2>MY ACCOUNT</h2>
            <p>Order History</p>
            <p>Wish List</p>
            <p>NewSletter</p>
            <p>Returns</p>
        </div>

        <div>
            <h2>Nde,Steel Limited,Banani</h2>
            <p>Nde@gmail.com</p>
            <p>016868486</p>
            <p>Dhaka,Bangladesh</p>

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
