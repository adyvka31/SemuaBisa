
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

document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("open-modal");
    const closeModalButton = document.getElementById("close-modal");
    const modal = document.getElementById("select-modal");

    openModalButton.addEventListener("click", function () {
      modal.classList.remove("hidden");
    });

    closeModalButton.addEventListener("click", function () {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });

  window.addEventListener('scroll', function() {
const navbar = document.getElementById('navbar');
if (window.scrollY > 0) {
    navbar.classList.add('border-b-2', 'shadow-md');
} else {
    navbar.classList.remove('border-b-2', 'shadow-md');
}
});


