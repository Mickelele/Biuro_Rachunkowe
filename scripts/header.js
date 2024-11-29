const links = document.querySelectorAll('.menu-item');
const savedActiveLink = localStorage.getItem('activeLink');

if (savedActiveLink) {
    const activeLink = document.querySelector(`.menu-item[href="${savedActiveLink}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}


links.forEach(link => {
    link.addEventListener('click', function(event) {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        localStorage.setItem('activeLink', this.getAttribute('href'));
    });
});



document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    if (menuIcon && menu) {
        menuIcon.addEventListener("click", function () {
            menu.classList.toggle("hidden");
        });
    }
});


    







