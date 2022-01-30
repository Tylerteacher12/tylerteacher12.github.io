let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click' , function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

// swiper libray initialization
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 9,
    autoplay : {
        delay : 3000
    },
    // responsive breakpoints
    breakpoints : {
        '@0' : {
            slidesPerView : 1

        },
        // 888px
        '@1.00' : {
            slidesPerView : 1
        },
        // 1110px
        '@1.25' : {
            slidesPerView : 2
        },
        // 1330px
        '@1.50' : {
            slidesPerView: 3
        }
    }
})

// Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value 
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}