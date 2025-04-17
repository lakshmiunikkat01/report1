// Select all anchor elements with an href -(link to another page attribute) that starts with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add a click event listener to each anchor
    anchor.addEventListener('click', function (e) {
        // Prevent the default behavior of the link (jumping instantly to the target)
        e.preventDefault();

        // Get the target element based on the href attribute value of the clicked link
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // Enable smooth scrolling behavior
            behavior: 'smooth'
        });
    });
});
