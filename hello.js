
// Dummy data - replace this with your actual data
const names = [
  { id: 1, name: 'Example Name' },
  // ... other names
];

function filterNames() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const resultsContainer = document.getElementById('searchResults');
  
  // Clear previous results
  resultsContainer.innerHTML = '';

  // Filter the names
  const filteredNames = names.filter(item => item.name.toUpperCase().includes(filter));

  // Show the matching results
  filteredNames.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.innerText = item.name;

    // Add a click event listener to each result item
    resultItem.addEventListener('click', function() {
      showCard(item.name);
    });

    resultsContainer.appendChild(resultItem);
  });
}

function showCard(name) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (card.dataset.name === name) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

// Add a keyup event listener to the search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', filterNames);
