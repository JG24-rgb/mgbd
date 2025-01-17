document.addEventListener('DOMContentLoaded', function() {
    const navbarIcon = document.querySelector('.navbar__icon');
    const dropdownMenu = document.querySelector('.navbar__dropdown');

    navbarIcon.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
  // Function to initialize navigation for a set of product cards
  function initProductNavigation(containerId) {
    const productContainer = document.getElementById(containerId);
    const productCards = productContainer.querySelectorAll('.product-card');
    const totalCards = productCards.length;
    let currentIndex = 0;

    // Function to show/hide cards based on currentIndex
    function showCard(index) {
      productCards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
      updateSlideIndicator();
    }

    // Function to handle navigation arrows
    function navigate(direction) {
      if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalCards;
      } else {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      }
      showCard(currentIndex);
    }

    // Event delegation for navigation arrows within the product container
    productContainer.addEventListener('click', function(event) {
      const target = event.target;
      if (target.classList.contains('left-arrow')) {
        navigate('prev');
      } else if (target.classList.contains('right-arrow')) {
        navigate('next');
      }
    });

    // Update slide indicator
    function updateSlideIndicator() {
      const slideIndicator = productContainer.querySelector('.slide-indicator');
      if (slideIndicator) {
        slideIndicator.textContent = `${currentIndex + 1}/${totalCards}`;
      }
    }

    // Initialize the first card as active
    showCard(currentIndex);
  }

  // Initialize navigation for both sets of product cards
  initProductNavigation('product-container'); // Initialize for the first container
  initProductNavigation('product-container-2'); // Initialize for the second container
});












