document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <button id="newButton1">New</button>
    <div id="popupOverlay" class="overlay">
  <!-- Form container -->
  <div class="form-container">
    <!-- Close button -->
    <button id="close-btn">X</button>

    <!-- Form content -->
    <form id="myForm">
      <div class="upp">
<div class="t1">

<label id="textt" for="text1">Title:</label>
<input type="text" id="text1" class="form-input" required>
<label id="textt" for="image">Image:</label>
      <input type="file" id="image"  required>
</div>

    <div class="down2">
    <label id="tex3"  >Blog:</label>
        <textarea id="tt1"  type="text" required></textarea>
    </div>
   </div>

      <button type="button" class="submit-btn">Submit</button>
    </form>
  </div>
</div>
    <!-- Your navbar HTML goes here -->
    `;
  
    const navbarContainer = document.getElementById("container3");
    navbarContainer.innerHTML = navbar;

    const outerDiv = document.createElement('div');
    outerDiv.classList.add('lastest');

    const h2Element = document.createElement('h2');
    h2Element.classList.add('allpro');
    h2Element.textContent = 'Latest News';

    outerDiv.appendChild(h2Element);
    navbarContainer.appendChild(outerDiv);

 var button12 = document.getElementById("newButton1");

    // Add a click event listener to the button
    button12.addEventListener("click", function() {
        // Code to be executed when the button is clicked
       document.getElementById('popupOverlay').style.display = 'flex';
    });
    var closeBtn = document.getElementById("close-btn");

    // Add a click event listener to the button
    closeBtn.addEventListener("click", function() {
        // Code to be executed when the button is clicked
       document.getElementById('popupOverlay').style.display = 'none';
    });






   





    const container3 = document.getElementById('container3');
    const cardData3 = [
        {
            backgroundImage: './image/card/shoe1.jpg',
            title: 'Men Shoe',
            subtitle: 'Climatic evidence suggests that people were probably protecting their feet from frigid conditions '
        },
        {
            backgroundImage: './image/card/tshirt.jpg',
            title: 'T-Shirt',
            subtitle: 'I get it. I’m a woman, usually size XS, so anything unisex usually doesn’t work for me. But these do like genuinely good on women'
        },
        {
            backgroundImage: './image/card/Girls Cap (1).jpg',
            title: 'Girls Cap',
            subtitle: 'The front of the hat typically displays a design or a logo (historically, usually only a sports team, namely a baseball team, or names of relevant companies)'
        }
    ];



    cardData3.forEach((data, index) => {
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
                text.style.display = 'none';
                fullText.style.display = 'block';
                button.textContent = 'Read Less';
            } else {
                text.style.display = 'block';
                fullText.style.display = 'none';
                button.textContent = 'Read More';
            }
        });

        card.appendChild(imageElement);
        card.appendChild(title);
        card.appendChild(text);
        card.appendChild(fullText);
        card.appendChild(button);
        container3.appendChild(card);

        // Apply styles with intersection observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 1s, transform 1s';
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateX(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        card.style.opacity = 0;
        card.style.transform = 'translateX(60%)';

        setTimeout(() => {
            observer.observe(card);
        }, 900 * index);
    });
});
