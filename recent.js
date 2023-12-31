
document.addEventListener("DOMContentLoaded", function () {
    const navbar = `  
`;
    // Create the div element with class "container5"
const containerDiv = document.createElement('div');
containerDiv.classList.add('container5');

// Create the h2 element with class "allpro"
const heading = document.createElement('h2');
heading.classList.add('allpro');
heading.textContent = 'Recent View';

// Append the h2 element to the div element
containerDiv.appendChild(heading);

// Append the entire containerDiv to the document body (you can replace document.body with another parent element if needed)


    const navbarContainer = document.getElementById("container4");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }
const cardData4 = [
  {
    backgroundImage: './image/card/shoe1.jpg',
    title: 'Men Casual Shoe',
    subtitle: '3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    title: 'Men Casual Shirt',
    subtitle: '2000$'
  },
  {
    backgroundImage: './image/card/hoodie.jpg',
    title: 'Hoodie',
    subtitle: '4000$'
  },
  {
    backgroundImage: './image/card/shoe2.jpg',
    title: 'Girl Shoe',
    subtitle: '3000$'
  }
]


const cardContainer4 = document.getElementById('container4');
  cardContainer4.appendChild(containerDiv);
cardData4.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('card');
 
const imageElement = document.createElement('img');
imageElement.style.borderRadius = '10px';
    imageElement.src = data.backgroundImage;
  imageElement.height = 200;
    imageElement.width = 300;
cardContainer4.style.marginLeft = '100px';    
  const title = document.createElement('h2');
  title.classList.add('title1');

  title.textContent = data.title;

  const subtitle = document.createElement('h2');
  subtitle.textContent = data.subtitle;
  subtitle.classList.add('subtitle1');
  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(subtitle);
    cardContainer4.appendChild(card);
  
});
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

  const special1 = document.querySelectorAll(".card");

  special1.forEach((card, index) => {
    console.log(`Applying styles to card ${index + 1}`);
    card.style.opacity = 0;
    card.style.transform = 'translateX(60%)';

    setTimeout(() => {
      observer.observe(card);
    }, 100 * index);
  });

});
