document.addEventListener("DOMContentLoaded", function () {
  const navbar = `  <div id="fea1" class="feature1">
            <h1 id="po">Popular Products</h1>
            <button class="btn6">View more</button>
        </div>
        <div class="features3">
            <div class="features2">
                <div id="fea1" class="feature2">
                    <h1 id="po1">Winter Collections</h1>
                </div>
                <div id="fea1" class="feature3">
                    <h1 id="po2">Summer Collections</h1s>
                </div>
            </div>
            <div id="fea1" class="feature4">
                <div id="fea1">
                    <h1 id="po3">Up to 70% OFF Spring Sale!</h1>
                </div>
            </div>
        </div>
`;
// 
// Append the entire outerDiv to the document body (you can replace document.body with another parent element if needed)


  const navbarContainer = document.querySelector(".features");
  if (navbarContainer) {
  
    navbarContainer.innerHTML = navbar;
  }

  const cardDatac1 = [
    { backgroundImage: './image/card2/fourth.jpg' },
    { backgroundImage: './image/card2/two.jpg' },
    { backgroundImage: './image/card2/third.jpg' },
    { backgroundImage: './image/card2/fourth.jpg' }
  ];

  var first = document.querySelector(".feature1");
  first.style.backgroundImage = `url(${cardDatac1[0].backgroundImage})`;

  var second = document.querySelector(".feature2");
  second.style.backgroundImage = `url(${cardDatac1[1].backgroundImage})`;

  var third = document.querySelector(".feature3");
  third.style.backgroundImage = `url(${cardDatac1[2].backgroundImage})`;

  var fourth = document.querySelector(".feature4");
  fourth.style.backgroundImage = `url(${cardDatac1[3].backgroundImage})`;

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

  const special1 = document.querySelectorAll("#fea1");

  special1.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateX(60%)';

    setTimeout(() => {
      observer.observe(card);
    }, 900 * index);
  });
});
