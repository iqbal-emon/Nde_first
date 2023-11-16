document.addEventListener("DOMContentLoaded", function () {
  // First part of the code (generating special items)
  const navbar = `
   
  `;


  const specialContainer = document.querySelector('.special');
  specialContainer.appendChild(trendingDiv);
  const navbarContainer = document.getElementById("special");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbar;
  }
  const specialItemsData = [
    {
      imageSrc: './image/card/shoe1.jpg',
      title: 'Women Casual Shoe',
      ratingSrc: './image/card/star.png',
      price: '$2000.99',
      height: 200,
      width: 300,
    },
    {
      imageSrc: './image/card/tshirt.jpg',
      title: 'Men Casual Tshirt',
      ratingSrc: './image/card/star.png',
      price: '$2000.99',
      height: 200,
      width: 300,
    },
    {
      imageSrc: './image/card/shoe2.jpg',
      title: 'Men Casual Shoe',
      ratingSrc: './image/card/star.png',
      price: '$2000.99',
      height: 150,
      width: 300,
    },
    {
      imageSrc: './image/card/shoe3.jpg',
      title: 'Men Casual Shoe',
      ratingSrc: './image/card/star.png',
      price: '$2000.99',
      height: 150,
      width: 200,
    },
  ];

  specialItemsData.forEach(data => {
    const specialItem = document.createElement('div');
    specialItem.classList.add('special1');

    const imageElement = document.createElement('img');
    imageElement.classList.add('img3');
    imageElement.src = data.imageSrc;
    imageElement.alt = '';
    imageElement.height = data.height;
    imageElement.width = data.width;

    const titleElement = document.createElement('h3');
    titleElement.classList.add('h');
    titleElement.textContent = data.title;

    const ratingElement = document.createElement('img');
    ratingElement.classList.add('img2');
    ratingElement.src = data.ratingSrc;
    ratingElement.alt = '';
    ratingElement.width = 380;
    ratingElement.height = 250;

    const priceElement = document.createElement('h3');
    priceElement.classList.add('h');
    priceElement.textContent = data.price;

    specialItem.appendChild(imageElement);
    specialItem.appendChild(titleElement);
    specialItem.appendChild(ratingElement);
    specialItem.appendChild(priceElement);

    specialContainer.appendChild(specialItem);
  });

  // Second part of the code (applying styles with IntersectionObserver)
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
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

  const special1 = document.querySelectorAll(".special1");

  special1.forEach((card, index) => {
    console.log(`Applying styles to card ${index + 1}`);
    card.style.opacity = 0;
    card.style.transform = 'translateX(90%)';

    setTimeout(() => {
      observer.observe(card);
    }, 100 * index);
  });
 var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  // var observer = new IntersectionObserver((entries, observer) => {
  //   entries.forEach((entry) => {

  //     if (entry.isIntersecting) {
  //       entry.target.style.transition = 'opacity 1s, transform 1s';
  //       entry.target.style.opacity = 1;
  //       entry.target.style.transform = 'translateX(0)';
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // }, observerOptions);

//   const special2 = document.querySelectorAll("#fea1");


// special2.forEach((card, index) => {
//   console.log(`Applying styles to card ${index + 1}`);
//   card.style.opacity = 0;
//   card.style.transform = 'translateX(60%)';

//   setTimeout(() => {
//     observer.observe(card);
//   }, 900 * index);
// });









  
});
