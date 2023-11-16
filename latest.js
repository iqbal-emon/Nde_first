
document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
    
`;
    
    const navbarContainer = document.getElementById("ca");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }
// Create the div element with class "lastest" and id "le"
const latestDiv = document.createElement('div');
latestDiv.classList.add('lastest');
latestDiv.id = 'le';

// Create the h2 element with class "allpro"
const heading = document.createElement('h2');
heading.classList.add('allpro');
heading.textContent = 'Latest Products';

// Append the h2 element to the div element
latestDiv.appendChild(heading);

// Append the entire latestDiv to the document body (you can replace document.body with another parent element if needed)


const container2 = document.getElementById('container2');
const cardData2 = [
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
    backgroundImage: './image/card/tshirt.jpg',
    title: 'Men Casual Shirt',
    subtitle: '2000$'
  },
  {
    backgroundImage: './image/card/shoe2.jpg',
    title: 'Beg',
    subtitle: '2000$'
  }
];
  container2.appendChild(latestDiv);
cardData2.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('card');

  const imageElement = document.createElement('img');
  imageElement.src = data.backgroundImage;
  imageElement.height = 200;
  imageElement.width = 300;
imageElement.style.borderRadius = '10px';
  container2.style.marginLeft = '100px';
 
  const title = document.createElement('h2');
  title.textContent = data.title;

  const subtitle = document.createElement('h2');
  subtitle.textContent = data.subtitle;

  card.appendChild(imageElement);
  
  card.appendChild(title);

  card.appendChild(subtitle);
  container2.appendChild(card);
});
var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
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
    card.style.transform = 'translateX(90%)';

    setTimeout(() => {
      observer.observe(card);
    }, 50* index);
  });



    
});
