const cardData = [
  {
    backgroundImage: './image/card/shoe1.jpg',
    name: 'Men first shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men second shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men third shirt',
    price:'3000$'
    },
    {
       backgroundImage: './image/card/shoe2.jpg',
    name: 'Men fourth shirt',
    price:'3000$'
    },
     {
    backgroundImage: './image/card/shoe1.jpg',
   name: 'Men fifth shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men sixth shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men seventh  shirt',
    price:'3000$'
    },
    {
       backgroundImage: './image/card/shoe2.jpg',
    name: 'Men eighten shirt',
    price:'3000$'
    },
     {
    backgroundImage: './image/card/shoe1.jpg',
    name: 'Men fourthlast shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men thirdlast shirt',
    price:'3000$'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    name: 'Men secondlast shirt',
    price:'3000$'
    },
    {
       backgroundImage: './image/card/shoe2.jpg',
    name: 'Men last shirt',
    price:'3000$'
  }
  
];

const cartb = document.getElementById('cartbutton');
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('myDropdown');
cartb.addEventListener('click', () => {
   if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }

});





var cartAdd = [];
// var cartItem = {};

const cardContainer = document.getElementById('container');

cardData.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('card');
const imageElement = document.createElement('img');

    imageElement.src = data.backgroundImage;
  imageElement.height = 200;
  imageElement.width = 300;
  imageElement.style.borderRadius = '10px';
cardContainer.style.marginLeft = '100px';    
  const title = document.createElement('h2');
  
  title.textContent = data.name;

  const subtitle = document.createElement('h2');
  subtitle.textContent = data.price;
   const btn12 = document.createElement('button');
    btn12.classList.add('btn12');
  btn12.textContent = 'add to cart';
   btn12.addEventListener('click', () => {
     cartAdd.push(data);
     showCartDetails();
   
  });
 function showCartDetails() {
  dropdownContent.innerHTML = ''; // Clear the previous content

  cartAdd.forEach(item => {
    // Create a new element for each item
    const cartItem = document.createElement('div');
    cartItem.textContent = item.name + "=" + item.price;
    dropdownContent.appendChild(cartItem);
  });
}








  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(btn12);
    cardContainer.appendChild(card);
  
});










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



const container3 = document.getElementById('container3');
const cardData3 = [
  {
    backgroundImage: './image/card/shoe1.jpg',
     title: 'Men first Shirt',
        subtitle: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque'
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
  text.textContent = data.subtitle.substring(0, 80); // Show the first 80 characters of the subtitle

  const fullText = document.createElement('p');
  fullText.classList.add('subtitle');
  fullText.style.display = 'none';
  fullText.textContent = data.subtitle; // Full subtitle

  const button = document.createElement('button');
  button.textContent = 'Read More';
  button.classList.add('btn11');

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
      ardee.style.height = 'auto';
    }
  });

  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(fullText);
  card.appendChild(button);
  container33.appendChild(card);
});

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
    backgroundImage: './image/card/tshirt.jpg',
    title: 'Men Casual Shirt',
    subtitle: '2000$'
  },
  {
    backgroundImage: './image/card/shoe2.jpg',
    title: 'Beg',
    subtitle: '2000$'
  }
]


const cardContainer4 = document.getElementById('container4');

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
document.addEventListener("DOMContentLoaded", function () {
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // If entry (card) is visible
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 1s, transform 1s';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, observerOptions);

  // Target all cards
  var cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(100%)'; // Start from the bottom
    setTimeout(() => {
      observer.observe(card);
    }, 800 * index); // 2-second delay between cards
  });
  



});








let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// button11 = document.querySelector('.btn11');
// cardee=document.querySelector('.carde');
// button11.addEventListener('click', function () {
//   cardee.style.height = '600px';
//   button11.style.display = 'none';


// });



const cardee = document.querySelector('.carde');
const shortText = document.querySelector('.short-text');
const fullText = document.querySelector('.full-text');
const readMoreButton = document.querySelector('.btn11');

let isFullTextVisible = false;

function toggleText() {
  if (!isFullTextVisible) {
    shortText.style.display = 'none';
    fullText.style.display = 'block';
    readMoreButton.textContent = 'Read Less';
    cardee.style.height = 'auto'; // Adjust the height as needed
  } else {
    shortText.style.display = 'block';
    fullText.style.display = 'none';
    readMoreButton.textContent = 'Read More';
    cardee.style.height = 'auto'; // Reset the height when showing less text
  }

  isFullTextVisible = !isFullTextVisible;
}

// const btn13 = document.querySelector('.btn12');









