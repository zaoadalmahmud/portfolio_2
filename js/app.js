const hamburger = document.querySelector('.header .navbar .hamburger');
const mobile_menu = document.querySelector('.header .navbar ul');
const header = document.querySelector('navbar');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

$(document).ready(function(){
    // owl carousel script
    $('.carousel').owlCarousel({
        
    });
});