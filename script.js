// Initialize the Bootstrap Carousel once the DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        var carousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
            interval: 3000, // Auto slide every 3 seconds
            ride: 'carousel' // Make it auto-ride
        });

        // Your custom transition logic
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        const carouselItemWrappers = carousel.querySelectorAll('.carousel-item-wrapper');
        const descriptions = carousel.querySelectorAll('.product-description');

        // Set initial opacity for all items and descriptions to 0
        carouselItemWrappers.forEach(function(wrapper) {
            wrapper.style.opacity = '0';
        });
        descriptions.forEach(function(description) {
            description.style.opacity = '0';
        });

        // Add the "slid" event to trigger the smooth transition on both images and descriptions
        carousel.addEventListener('slid.bs.carousel', function() {
            // Reset opacity for all items and descriptions
            carouselItemWrappers.forEach(function(wrapper) {
                wrapper.style.opacity = '0';
            });
            descriptions.forEach(function(description) {
                description.style.opacity = '0';
            });

            // Set opacity for the current active item and description
            const activeItem = carousel.querySelector('.carousel-item.active');
            const activeWrapper = activeItem.querySelector('.carousel-item-wrapper');
            const activeDescription = activeItem.querySelector('.product-description');

            activeWrapper.style.opacity = '1';
            activeDescription.style.opacity = '1';
        });

        // Manually trigger the "slid" event for the first load to show the first active item with description
        carousel.dispatchEvent(new Event('slid.bs.carousel'));
    });

