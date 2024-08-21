// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Handle download button interactions
    const buttons = document.querySelectorAll('.download-button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Thank you for downloading!');
        });
    });

    // Dropdown and responsive display handling
    const dropdownButton = document.querySelector('.dropdown-button');
    const servicesContainer = document.querySelector('.features-container');
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    // Toggle services dropdown display
    if (dropdownButton && servicesContainer) {
        dropdownButton.addEventListener('click', function () {
            servicesContainer.style.display = servicesContainer.style.display === 'flex' ? 'none' : 'flex';
            dropdownButton.classList.toggle('active');
            if (servicesContainer.style.display === 'flex') {
                updateServicesDisplay(); // Update display settings when showing container
            }
        });
    }

    // Toggle sidebar visibility
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function () {
            const isOpen = sidebar.style.transform === 'translateX(0px)';
            sidebar.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0px)';
        });
    }

    // Listen to resize event to adjust the display of services dynamically
    window.addEventListener('resize', updateServicesDisplay);
});

let currentIndex = 0;

function getItemsPerPage() {
    // Adjusts number of items per page based on the viewport width
    return window.innerWidth > 768 ? 3 : 1;
}

function updateServicesDisplay() {
    const container = document.querySelector('.features-container');
    if (!container) {
        console.error('Features container not found!');
        return;
    }

    const totalItems = container.children.length;
    const itemsPerPage = getItemsPerPage();
    const totalSets = Math.ceil(totalItems / itemsPerPage);

    // Ensure the current index is valid
    currentIndex = Math.min(currentIndex, totalSets - 1);

    // Calculate and apply transform for sliding transitions
    const translateXPercentage = currentIndex * -100;
    container.style.transform = `translateX(${translateXPercentage}%)`;

    console.log(`Updated Translate X Percentage: ${translateXPercentage}% - based on current index: ${currentIndex}`);
}
