
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sticky-banner').classList.add('hidden');
});

// -------

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-md', 'border-b'); // Menambahkan bayangan dan border saat di-scroll
    } else {
        navbar.classList.remove('shadow-md', 'border-b'); // Menghapus bayangan dan border saat di atas
    }
});

