
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
  text.textContent = data.subtitle.substring(0, 80); 

  const fullText = document.createElement('p');
  fullText.classList.add('subtitle');
  fullText.style.display = 'none';
  fullText.textContent = data.subtitle; 

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









let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {

  document.documentElement.scrollTop = 0; 
}




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
    cardee.style.height = 'auto'; 
  }

  isFullTextVisible = !isFullTextVisible;
}

// const names = [
//   { id: 1, name: 'Example Name' },
//   // ... other names
// ];

// function filterNames() {
//   const input = document.getElementById('searchInput');
//   const filter = input.value.toUpperCase();
//   const resultsContainer = document.getElementById('searchResults');
  
//   // Clear previous results
//   resultsContainer.innerHTML = '';

//   // Filter the names
//   const filteredNames = names.filter(item => item.name.toUpperCase().includes(filter));

//   // Show the matching results
//   filteredNames.forEach(item => {
//     const resultItem = document.createElement('div');
//     resultItem.innerText = item.name;
//     resultItem.onclick = function() {
//       showCard(item.name);
//     };
//     resultsContainer.appendChild(resultItem);
//   });
// }

// function showCard(name) {
//   const cards = document.querySelectorAll('.card');
//   cards.forEach(card => {
//     if (card.dataset.name === name) {
//       card.classList.add('active');
//     } else {
//       card.classList.remove('active');
//     }
//   });
// }
function filterNames() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
   const resultsContainer = document.getElementById('searchResults');
      if (filter === '') {
        resultsContainer.innerHTML = '';  // Clear the results container
        return;
    }
      
      
      const filteredNames = cardData.filter(item => item.name.toUpperCase().includes(filter));
      
      resultsContainer.innerHTML = '';
   filteredNames.forEach(item => {
    
     
        const resultItem = document.createElement('div');
     resultItem.innerText = item.name;
    //  if (input == null) {
    //     resultsContainer.innerHTML='';
    //  }
        resultItem.onclick = function () {
          showAndScrollToCard(item.name);
        };
        resultsContainer.appendChild(resultItem);
      });
    }

function showAndScrollToCard(name2) {
     var searchResults = document.getElementById('searchResults');
      
  const cards = document.querySelectorAll('.card');
const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  searchResults.innerHTML = ''; 
  // filter.innerHTML = '';
  // input = name2;
  cards.forEach((card, index) => {
    
    const cardInfo = cardData[index];
    console.log(cardInfo.name);
    console.log("The name is " + name2);
    if (cardInfo.name ==name2) {
      
      card.scrollIntoView({
      //  behavior: 'smooth', block: 'nearest', inline: 'start',
    
      });
    }
  });
   
   
}




document.addEventListener("DOMContentLoaded", function () {
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

  // var cards = document.querySelectorAll('.card');
const special1 = document.querySelectorAll(".special1");
// console.log(special1);

special1.forEach((card, index) => {
  console.log(`Applying styles to card ${index + 1}`);
  card.style.opacity = 0;
  card.style.transform = 'translateX(60%)';

  setTimeout(() => {
    observer.observe(card);
  }, 900 * index);
});




});

document.addEventListener("DOMContentLoaded", function () {
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

  // var cards = document.querySelectorAll('.card');
const special1 = document.querySelectorAll(".carde");
// console.log(special1);

special1.forEach((card, index) => {
  console.log(`Applying styles to card ${index + 1}`);
  card.style.opacity = 0;
  card.style.transform = 'translateX(60%)';

  setTimeout(() => {
    observer.observe(card);
  }, 900 * index);
});




});

// const navbarElement = document.createElement("a");
// navbarElement.href = "#ca";
// navbarElement.innerHTML = "HOME";


// const navbarElement2 = document.createElement("a");
// navbarElement2.href = "#allproduct";
// navbarElement2.innerHTML = "PRODUCTS";

// const elementList = document.querySelector('.navbar2');

// const navbarElement3 = document.createElement("a");
// navbarElement3.href = "#le";
// navbarElement3.innerHTML = "NEW";

// const navbarElement4 = document.createElement("a");
// navbarElement4.href = "#container4";
// navbarElement4.innerHTML = "RECENT";

// const navbarElement5 = document.createElement("a");
// navbarElement5.href = "#container3";
// navbarElement5.innerHTML = "BLOG";






// elementList.appendChild(navbarElement);
// elementList.appendChild(navbarElement2);
// elementList.appendChild(navbarElement3);
// elementList.appendChild(navbarElement4);
// elementList.appendChild(navbarElement5);

// const cardDataa = [
//   {
//     backgroundImage: './image/card/men (1).jpg',
//     name: 'Shop for Man',
//     price:'155 Products',
//     btnn:'SHOP NOW'
//   },
//   {
//     backgroundImage: './image/card/women.jpg',
//     name: 'Shop for Woman',
//     price:'155 Products',
//     btnn:'SHOP NOW'


//   }, {
//     backgroundImage: './image/card/menandwomen.jpg',
//     name: 'Shop for Man and Woman',
//     price: '155 Products',
//     btnn:'SHOP NOW'
//   }


// ]



// var style1 = document.getElementById('card5');
// // var style2 = document.getElementById('card2');
// var style3 = document.getElementById('car');






// cardDataa.forEach(data => {
 
//   const imageElement = document.createElement('img');
  
//   const style2 = document.createElement('div');
//     style2.classList.add('card1');

// // imageElement.style.borderRadius = '10px';
//     imageElement.src = data.backgroundImage;
//   imageElement.height = 250;
//     imageElement.width = 380;
// // cardContainer4.style.marginLeft = '100px';    
//   const title = document.createElement('h1');

//   title.textContent = data.name;

//   const subtitle = document.createElement('h4');
//   subtitle.textContent = data.price;
//    const btnfirst = document.createElement('button');
//   btnfirst.textContent = data.btnn;
//   // subtitle.classList.add('subtitle1');
//   style2.appendChild(title);
//   style2.appendChild(subtitle);
//   style2.appendChild(btnfirst);
  
//   style1.appendChild(imageElement);
//   style1.appendChild(style2);
//   style3.appendChild(style1);
  
// });



// const cardDatac = [
//   {
//     backgroundImage: './image/card/men (1).jpg'
//   },
//   {
//     backgroundImage: './image/card/women.jpg'
//   },
//   {
//     backgroundImage: './image/card/menandwomen.jpg'
//   }
// ];
//  width="380" height="250"
// var ft1 = document.querySelector('.car');
// var ca2 = document.getElementById('card5');
// cardDatac.forEach(data => {
 
// const imageElement = document.createElement('img');

//     imageElement.src = data.backgroundImage;
//   imageElement.height = 250;
//   imageElement.width = 380;
//   ca2.appendChild(imageElement);
//   // ft1.appendChild(ca2);
// });





// var featurea = document.querySelector('.feature1');
// var featurea2 = document.querySelector('.features');

// // Access the first object in the array
// featurea.style.backgroundImage = `url('${cardDatac[0].backgroundImage}')`;

// var featurea1 = document.querySelector('.feature1');
// featurea1.style.backgroundImage = `url('${cardDatac[1].backgroundImage}')`;

// featurea2.appendChild(featurea);
// featurea2.appendChild(featurea1);
















