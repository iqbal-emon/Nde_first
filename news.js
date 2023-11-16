
document.addEventListener("DOMContentLoaded", function () {
    const navbar = `  
`;
  // Create the outer div element with class "lastest"
const outerDiv = document.createElement('div');
outerDiv.classList.add('lastest');

// Create the h2 element with class "allpro" and text content "Latest News"
const h2Element = document.createElement('h2');
h2Element.classList.add('allpro');
h2Element.textContent = 'Latest News';

// Append the h2 element to the outer div
outerDiv.appendChild(h2Element);

// Append the entire outerDiv to the document body (you can replace document.body with another parent element if needed)


    
  const navbarContainer = document.getElementById("container3");
  navbarContainer.appendChild(outerDiv)
    if (navbarContainer) {
        navbarContainer.innerHTML = navbar;
    }
const container3 = document.getElementById('container3');
const cardData3 = [
  {
    backgroundImage: './image/card/shoe1.jpg',
     title: 'Men first Shirt',
        subtitle: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    title: 'Men second Shirt',
     subtitle: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    title: 'last Casual Shirt',
   subtitle: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque' 
  }
];

const container33 = document.getElementById('container3');
  container33.appendChild(outerDiv);
cardData3.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('carde');

  const imageElement = document.createElement('img');
  imageElement.src = data.backgroundImage;
  imageElement.height = 300;
  imageElement.width = 400;
  imageElement.style.borderRadius = '10px';

  const title = document.createElement('h1');
  title.textContent = data.title;

  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = data.subtitle.substring(0, 80); 

  const fullText = document.createElement('p');
  fullText.classList.add('subtitle');
  fullText.style.display = 'none';
  fullText.textContent = data.subtitle; 

  const button = document.createElement('button');
  button.textContent = 'Read More';
  button.classList.add('btn11');
  var cardee = document.querySelector(".carde");
  button.addEventListener('click', () => {
    if (fullText.style.display === 'none') {
      cardee.style.height = 'auto';
      text.style.display = 'none';
      fullText.style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      text.style.display = 'block';
      fullText.style.display = 'none';
      button.textContent = 'Read More';
      cardee.style.height = 'auto';
    }
  });

  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(fullText);
  card.appendChild(button);
  container33.appendChild(card);
});
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

  const special1 = document.querySelectorAll(".carde");

  special1.forEach((card, index) => {
    console.log(`Applying styles to card ${index + 1}`);
    card.style.opacity = 0;
    card.style.transform = 'translateX(60%)';

    setTimeout(() => {
      observer.observe(card);
    }, 900 * index);
  });
    
});
