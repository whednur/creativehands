

/* Category carousel start */
$('.owl-carousel').owlCarousel({
    
    margin:10,
    nav:false,
    autoplay:true,
    loop:true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1000:{
            items:5
        }
    }
}) /* Category carousel end */

/* Show cart start */


/* Show cart end */
 $(function() {
const cartOpen = document.querySelector(".cart-info");
const cartClose = document.querySelector(".close__toggle");
const cartDivOpen = document.querySelector(".cart-info-base");
const cartConteiner = document.querySelector(".cart-info-base");

cartOpen.addEventListener("click", () => {
    cartDivOpen.classList.add("open");
    document.body.classList.add("active");
    cartConteiner.style.right = "0";
    cartConteiner.style.width = "350px";
    cartConteiner.style.opacity = "1.0";

});

cartClose.addEventListener("click", () => {
    cartDivOpen.classList.remove("open");
    document.body.classList.remove("active");
    cartConteiner.style.right = "-355px";
    cartConteiner.style.opacity = "0.0";
    

});

})();

/* Show cart end */