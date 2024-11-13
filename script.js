// Sync hero carousel with other carousels
const leftCarousel = new bootstrap.Carousel('#leftCarousel');
const centerCarousel = new bootstrap.Carousel('#centerCarousel');
const rightCarousel = new bootstrap.Carousel('#rightCarousel');
const heroCarousel = new bootstrap.Carousel('#heroCarousel');

// Listen to the 'slide.bs.carousel' event on the center carousel
document.querySelector('#centerCarousel').addEventListener('slide.bs.carousel', (event) => {
    heroCarousel.to(event.to); // Update hero carousel slide index to match
});



window.addEventListener('load', () => {
    // Wait 5 seconds after the page loads
    setTimeout(() => {
        // Remove the preloader by adding the 'loaded' class to the body
        document.body.classList.add('loaded');
    }, 5000); // 5000ms = 5 seconds
});






document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    // Here you could also implement AJAX form submission or integrate with a backend.
});





