document.addEventListener("DOMContentLoaded", function () {
  const navbar = ` 
  
  <div class="second1">
    <div class="style1" id="card5">
      <img id="upper1"  width="380" height="250" alt="">
      <div class="card1">
        <h1>Shop for Man</h1>
        <h4>155 Products</h4>
        <button class="btn3">SHOP NOW </button>
      </div>
    </div>

    <div class="style2" id="card5">
      <img id="upper2" width="380" height="250" alt="">
      <div class="card2">
        <h1>Shop for Woman</h1>
        <h4>155 Products</h4>
        <button class="btn4">SHOP NOW </button>
      </div>
    </div>

    <div class="style3" id="card5">
      <img id="upper3"  width="380" height="250" alt="">
      <div class="card3">
        <h1>Shop for Man and Woman</h1>
        <h4>155 Products</h4>
        <button class="btn5">SHOP NOW </button>
      </div>
    </div>
   </div>
  `;

  const navbarContainer = document.querySelector(".car");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbar;
  }

  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 1s, transform 1s';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const special1 = document.querySelectorAll("#card5");

  special1.forEach((card, index) => {
    console.log(`Applying styles to card ${index + 1}`);
    card.style.opacity = 0;
    card.style.transform = 'translateX(60%)';

    setTimeout(() => {
      observer.observe(card);
    }, 900 * index);
  });
  const specialItemsData = [
    {
      imageSrc: './image/card/men (1).jpg',
    },
    {
      imageSrc: './image/card/women.jpg',
    },
    {
       imageSrc:  '  ./image/card/menandwomen.jpg'
    }
     
  
  ];
  
  var imgElement1 = document.getElementById("upper1");
  var imgElement2 = document.getElementById("upper2");
  var imgElement3 = document.getElementById("upper3");
      imgElement1.src = specialItemsData[0].imageSrc;

     
      imgElement2.src = specialItemsData[1].imageSrc;
      

     
      imgElement3.src = specialItemsData[2].imageSrc;
      




});
