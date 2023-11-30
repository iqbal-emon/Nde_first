document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <button id="leftbtn">&#60;</button> <!-- "&#60;" represents the less-than symbol (<) -->
<button id="rightbtn">&#62;</button> <!-- "&#62;" represents the greater-than symbol (>) -->

    <button id="newButton1">New</button>
    <div id="popupOverlay" class="overlay">
  <!-- Form container -->
  <div class="form-container">
    <!-- Close button -->
    <button id="close-btn">X</button>

    <!-- Form content -->
    <form id="myForm" name="myform"  enctype="multipart/form-data">

    <div class="upp">
        <div class="t1">

        <div class="t12> 
             <label class="titileshow" for="text1">Title:</label>
    <input type="text" id="text1" name="TextField1" class="form-input" required>
            </div>
            <div id="imagediv">
          
            <input type="file" id="TextField2" name="ImageField" required>
            </div>
        </div>
        <div class="down2">
            <label id="blogLabel">Blog:</label>
            <textarea id="TextField3" name="TextField2"  required></textarea>
            <div id="newDiv">
        
            </div>
        </div>

      
        <input type="hidden" id="hiddenInput" name="ImageField1" value="hiii">
        </div>



        <button type="submit" class="submit-btn">Submit</button>
</form>


  </div>
</div>
    <!-- Your navbar HTML goes here -->
    
    `;
  
    const navbarContainer = document.getElementById("container3");
    navbarContainer.innerHTML = navbar;

    let imageInput = document.getElementById("TextField2");
    const newDiv1 = document.getElementById('newDiv');
        imageInput.addEventListener("change", function () {

            if (this.files && this.files[0]) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    newDiv1.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 20%; max-height: 100px;">`;
                };

                reader.readAsDataURL(this.files[0]);
            }
        });
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
    let cardData3=[];
    // const cardData3 = [
    //     {
    //         backgroundImage: './image/card/shoe1.jpg',
    //         title: 'Men Shoe',
    //         subtitle: 'Climatic evidence suggests that people were probably protecting their feet from frigid conditions '
    //     },
    //     {
    //         backgroundImage: './image/card/tshirt.jpg',
    //         title: 'T-Shirt',
    //         subtitle: 'I get it. I’m a woman, usually size XS, so anything unisex usually doesn’t work for me. But these do like genuinely good on women'
    //     },
    //     {
    //         backgroundImage: './image/card/Girls Cap (1).jpg',
    //         title: 'Girls Cap',
    //         subtitle: 'The front of the hat typically displays a design or a logo (historically, usually only a sports team, namely a baseball team, or names of relevant companies)'
    //     }
    // ];
    const card0123 = document.createElement('div');
                    
                card0123.classList.add('carde01234');
                var myForm = document.getElementById("myForm");

                myForm.addEventListener('submit', function (event) {
                    event.preventDefault();
console.log("submitted");
     
        card0123.innerHTML=null;
        document.getElementById('popupOverlay').style.display = 'none';
    
        // Get form data
        const formData = new FormData(document.getElementById('myForm'));
        const jsonObject = {};
        formData.forEach((value, key) => {
            if (key === 'ImageField') {
                // Handle file input separately
                jsonObject[key] = value.name; // Assuming you want to send the file name
            } else {
                jsonObject[key] = value;
            }
        });
    
        // API endpoint URL
        const apiUrl = 'https://localhost:7058/InsertBlog';
    
        // Send data to the API
        fetch(apiUrl, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    getAllDetails(); // Call getAllDetails after successful form submission
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                // Handle successful response from the API
                console.log('Success:', data);
                // location.reload();
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
            document.myform.reset();
            newDiv1.innerHTML=null;
    });

    getAllDetails();
    
    function getAllDetails() {
        // API endpoint URL for getting details
        fetch('https://localhost:7058/GetAllDetails')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                
                console.log("hello");
                console.log(data);
                cardData3 = data;
                console.log(cardData3, "carddata3");
    
                // Create cards inside the fetch callback
                cardData3.forEach((data1, index) => {
                    const card = document.createElement('div');
                    
                    card.classList.add('carde');
         const imageElement = document.createElement('img');
        
         // Assuming responseData.imageField.fileName and responseData.imageField.contentType are available
        // imageElement.src = "data:image/png;base64," + data1.imageFiel1;
        imageElement.src = 'data:image/png;base64,' + data1.imageField1;




        imageElement.height = 300;
        imageElement.width = 400;
        imageElement.style.borderRadius = '10px';
                    const title = document.createElement('h1');
                    title.textContent = data1.textField1;
    
                    const text = document.createElement('p');
                    text.classList.add('text');
                    
                    text.textContent = data1.textField2.substring(0, 60);
                    const fullText = document.createElement('p');
    
                    fullText.classList.add('subtitle');
                    fullText.style.display = 'none';
                    fullText.textContent = data1.textField2;
    
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
                    card0123.appendChild(card);
                    container3.appendChild(card0123);
                    
                    if(cardData3.length>3){
                    let currentIndex1 =0;
                    let cardInterval; 
                    document.getElementById("rightbtn").addEventListener("click", function () {
                        currentIndex1 = (currentIndex1 + 1) % cardData3.length;
                        console.log(currentIndex1);
                        stopAutoScroll();
                        updateContainerTransform();
                    });
                    var rightbtn1=  document.getElementById("leftbtn");
                    let cardData2=[];
                    rightbtn1.addEventListener("click", function () {
                        
                        currentIndex1 = (currentIndex1 - 1 + cardData3.length) % cardData3.length;
                        console.log(currentIndex1);
                        stopAutoScroll();

                        updateContainerTransform();
                    });
                    function updateContainerTransform() {
                        
                        card.style.transition = 'transform 0.7s ease-out'; // Adjust the duration as needed
                    
                        // Set transform property to move left to right
                        card.style.transform = `translateX(${-currentIndex1 * 80}%)`;
                   
                        // Other style modifications
                        // card.style.zIndex = 10000;
                        card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.6)";
                    }
                    // cardData3={...cardData3,...cardData3}
                    function updateContainerTransform() {
                        card.style.transition = 'transform 0.5s ease-out'; // Adjust the duration as needed
                    
                        // Set transform property to move left to right
                        card.style.transform = `translateX(${-currentIndex1 * 80}%)`;
                    
                        // Other style modifications
                        card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.6)";
                    }
                    
                    function updateContainerTransform() {
                        card.style.transition = 'transform 0.5s ease-out'; // Adjust the duration as needed
                    
                        // Set transform property to move left to right
                        card.style.transform = `translateX(${-currentIndex1 * 80}%)`;
                    
                        // Other style modifications
                        card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.6)";
                    
                        // Add the provided styles
                        // card.classList.add('carde');
                    }
                    
                    cardInterval = setInterval(function () {
                        currentIndex1 = (currentIndex1 + 1) % cardData3.length;
                    
                        
                        if (currentIndex1 === 0) {
                          
                            card.style.transition = 'none';
                    
                            // Set initial transform to move the last card out of the viewport
                            card.style.transform = `translateX(${cardData3.length * 80}%)`;
                    
                            // Trigger reflow to apply the style immediately
                            card.offsetHeight;
                    
                           
                            const firstCard = cardData3.shift();
                            cardData3.push(firstCard);
                    
                            
                            card.style.transform = `translateX(${cardData3.length * 180}%)`;
                    
                            
                            setTimeout(() => {
                                card.style.transition = 'transform 0.6s ease-out';
                    
                                updateContainerTransform();
                    
                                setTimeout(() => {
                                  
                                }, 500); // Adjust the duration as needed
                            }, 30);
                        } else {
                            // For non-last cards, apply the regular transformation
                            updateContainerTransform();
                        }
                    }, 800);
                    
                       
                    
function stopAutoScroll() {
    // Clear the interval to stop auto-scrolling
    clearInterval(cardInterval);
    
    // Wait for 7 seconds before starting auto-scrolling again
    
}
}
                });
            })
            .catch(error => {
                // Handle errors
                console.error('GetDetails Error:', error);
            });
           
    }
   
 
});


    // cardData3.forEach((data1, index) => {
    //     const card = document.createElement('div');
    //     card.classList.add('carde');

    //     // const imageElement = document.createElement('img');
    //     // imageElement.src = data1.backgroundImage;
    //     // imageElement.height = 300;
    //     // imageElement.width = 400;
    //     // imageElement.style.borderRadius = '10px';

    //     const title = document.createElement('h1');
    //     title.textContent = data1.textField1;

    //     const text = document.createElement('p');
    //     text.classList.add('text');
    //     // text.textContent = data1.subtitle.substring(0, 80);

    //     const fullText = document.createElement('p');
    //     fullText.classList.add('subtitle');
    //     fullText.style.display = 'none';
    //     fullText.textContent = data1.textField2;

    //     const button = document.createElement('button');
    //     button.textContent = 'Read More';
    //     button.classList.add('btn11');
    //     button.addEventListener('click', () => {
    //         if (fullText.style.display === 'none') {
    //             text.style.display = 'none';
    //             fullText.style.display = 'block';
    //             button.textContent = 'Read Less';
    //         } else {
    //             text.style.display = 'block';
    //             fullText.style.display = 'none';
    //             button.textContent = 'Read More';
    //         }
    //     });

    //     // card.appendChild(imageElement);
    //     card.appendChild(title);
    //     card.appendChild(text);
    //     card.appendChild(fullText);
    //     card.appendChild(button);
    //     container3.appendChild(card);
    // });
        // Apply styles with intersection observer
      
   


