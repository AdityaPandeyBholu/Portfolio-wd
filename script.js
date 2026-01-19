// Initialize AOS Animations
AOS.init({
    duration: 1000,
    once: true
});

// Theme Toggle Functionality
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Check System Preference on Load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    body.setAttribute('data-theme', 'light');
    themeBtn.classList.replace('fa-moon', 'fa-sun');
}

// Manual Toggle Click
themeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeBtn.classList.replace('fa-moon', 'fa-sun');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.classList.replace('fa-sun', 'fa-moon');
    }
});

// Form Submission (Simple Alert)
document.querySelector('form').addEventListener('submit', (e) => {
    // Yahan tum EmailJS ya koi aur service integrate kar sakte ho
    console.log("Form Submitted Successfully");
});