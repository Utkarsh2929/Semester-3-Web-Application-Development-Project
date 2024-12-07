document.querySelectorAll('.ai-card').forEach(card => {
    card.addEventListener('click', () => {
      alert("You clicked on " + card.querySelector('h3').innerText + "!");
    });
  });
  
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.ai-card');
  
    cards.forEach(card => {
      const title = card.querySelector('h3').innerText.toLowerCase();
      if (title.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
  