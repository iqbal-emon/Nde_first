const cardData = [
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
    },
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
    },
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

const cardContainer = document.getElementById('container');

cardData.forEach(data => {
  const card = document.createElement('div');
  card.classList.add('card');
 
const imageElement = document.createElement('img');

    imageElement.src = data.backgroundImage;
  imageElement.height = 200;
    imageElement.width = 300;
cardContainer.style.marginLeft = '100px';    
  const title = document.createElement('h2');
  title.textContent = data.title;

  const subtitle = document.createElement('h2');
  subtitle.textContent = data.subtitle;
  
  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(subtitle);
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
    title: 'Men Casual Shoe',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    title: 'Men Casual Shirt',
     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque'
  },
  {
    backgroundImage: './image/card/tshirt.jpg',
    title: 'Men Casual Shirt',
   subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque' 
  },
  {
    backgroundImage: './image/card/shoe2.jpg',
    title: 'Beg',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae dignissim risus. Donec cursus fringilla felis congue venenatis. Donec in facilisis eros. Ut diam neque'
  }
];

cardData3.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('card');
    

  const imageElement = document.createElement('img');
  imageElement.src = data.backgroundImage;
  imageElement.height = 200;
  imageElement.width = 300;

  container2.style.marginLeft = '100px';

  const title = document.createElement('h1');
    title.textContent = data.title;


  const subtitle = document.createElement('p');
  subtitle.textContent = data.subtitle;
  const button = document.createElement('button');
    button.textContent = "Read More"
    button.style.padding = '10px 20px';
  card.appendChild(imageElement);
  card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(button);
   card.style.textAlign = 'start';

  container3.appendChild(card);
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

    imageElement.src = data.backgroundImage;
  imageElement.height = 200;
    imageElement.width = 300;
cardContainer4.style.marginLeft = '100px';    
  const title = document.createElement('h2');
  title.textContent = data.title;

  const subtitle = document.createElement('h2');
  subtitle.textContent = data.subtitle;
  
  card.appendChild(imageElement);
  card.appendChild(title);
  card.appendChild(subtitle);
    cardContainer4.appendChild(card);
  
});







