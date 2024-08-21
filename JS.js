let currentIndex = 0;

function getItemsPerPage() {
    // Adjusts items per page based on the viewport width
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

    // Reset currentIndex if it exceeds the number of sets due to a resize or toggle.
    currentIndex = Math.min(currentIndex, totalSets - 1);

    // Calculate and apply the transform for sliding transitions.
    const translateXPercentage = currentIndex * -100;
    container.style.transform = `translateX(${translateXPercentage}%)`;

    console.log(`Updated Translate X Percentage: ${translateXPercentage}% - based on current index: ${currentIndex}`);
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const servicesContainer = document.querySelector('.features-container');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (dropdownButton && servicesContainer) {
        dropdownButton.addEventListener('click', function() {
            servicesContainer.style.display = servicesContainer.style.display === 'flex' ? 'none' : 'flex';
            dropdownButton.classList.toggle('active');
            // Update display if showing the container
            if (servicesContainer.style.display === 'flex') {
                updateServicesDisplay();
            }
        });
    }

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            // Toggle sidebar visibility
            const isOpen = sidebar.style.transform === 'translateX(0px)';
            sidebar.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0px)';
        });
    }

    // Responsive adjustments for services display
    window.addEventListener('resize', function() {
        updateServicesDisplay();
    });
});
