document.addEventListener("DOMContentLoaded", function () {
    const navbar = ` <div class="Carousel" id="ca">
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

    const navbarContainer = document.getElementById("Carousel");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }

});



















