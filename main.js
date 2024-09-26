
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sticky-banner').classList.add('hidden');
});

// -------

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('border-b-2', 'border-[#2F3087]', 'shadow-md'); // Add bottom border
    } else {
        navbar.classList.remove('border-b-2', 'border-[#2F3087]', 'shadow-md'); // Remove bottom border
    }
});


