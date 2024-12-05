document.addEventListener("DOMContentLoaded", function () {
    const animatables = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove for reverse animation
            }
        });
    });

    animatables.forEach((animatable) => observer.observe(animatable));
});




//animating the image
document.addEventListener("DOMContentLoaded", function () {
    const animatables = document.querySelectorAll(".animate, .animate-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove for reverse animation
            }
        });
    });

    animatables.forEach((animatable) => observer.observe(animatable));
});


//animating from left javascript

document.addEventListener("DOMContentLoaded", function () {
    const animatables = document.querySelectorAll(".animate, .animate-left");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Remove for reverse animation
            }
        });
    });

    animatables.forEach((animatable) => observer.observe(animatable));
});





//tabs javascript
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    tabLinks.forEach(link => link.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');

    // Hide all tab contents innitially before view
    tabContents.forEach(content => content.classList.remove('active'));

    // Show current tab content when I press it
    const targetTab = document.getElementById(link.dataset.tab);
    targetTab.classList.add('active');
  });
});
