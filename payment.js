// Get the modal and the buttons
var modal = document.querySelector(".modal");
var openModalBtn = document.getElementById("subb");
var closeModalBtn = document.getElementById("closeModalBtn");


openModalBtn.addEventListener("click", () => {
    // alert("modal show");
    modal.style.display = "block";
   
});
// When the user clicks the button, open the modal
// openModalBtn.click = function () {
    
// }

// When the user clicks the close button, close the modal
closeModalBtn.addEventListener("click", () => {
    // alert("modal show");
    modal.style.display = "none";
   
});

// When the user clicks outside the modal, close it
// window.click = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


document.addEventListener("DOMContentLoaded", function() {
    // Get the modal and the buttons
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("subb");
var closeModalBtn = document.getElementById("closeModalBtn");


openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
   
});
// When the user clicks the button, open the modal
openModalBtn.click = function () {
    alert("modal show");
}

// When the user clicks the close button, close the modal
closeModalBtn.click = function() {
    modal.style.display = "none";
}

// When the user clicks outside the modal, close it
// window.click = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

});

