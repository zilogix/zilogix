/* ==========================================================
   ZILOGIX
   APP.JS
========================================================== */

/* ==========================================================
   PRELOADER
========================================================== */

window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    const logo =
    document.getElementById("preloaderLogo");

    const target =
    document.querySelector(".logo");

    if(!preloader || !logo || !target) return;

    setTimeout(() => {

        const start =
        logo.getBoundingClientRect();

        const end =
        target.getBoundingClientRect();

        const x =
        end.left - start.left;

        const y =
        end.top - start.top;

        logo.style.transition =
        "transform 1.8s cubic-bezier(.22,1,.36,1)";

        logo.style.transform =
        `translate(${x}px,${y}px) scale(.22)`;

    },1200);

    setTimeout(()=>{

        preloader.classList.add("hidden");

    },3200);

});


/* ==========================================================
   NAVBAR
========================================================== */

const navbar =
document.getElementById("navbar");

window.addEventListener("scroll",()=>{

    if(!navbar) return;

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

},{passive:true});


/* ==========================================================
   MOBILE MENU
========================================================== */

const menuToggle =
document.getElementById("menuToggle");

const mobileMenu =
document.getElementById("mobileMenu");

if(menuToggle && mobileMenu){

    menuToggle.addEventListener("click",()=>{

        menuToggle.classList.toggle("active");

        mobileMenu.classList.toggle("active");

    });

}

document
.querySelectorAll(".mobile-menu a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("active");

    });

});


/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        const id =
        anchor.getAttribute("href");

        if(id==="#") return;

        const target =
        document.querySelector(id);

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});
/* ==========================================================
   REVEAL ANIMATION
========================================================== */

const revealElements =
document.querySelectorAll(

".section,.why-card,.focus-card,.footer"

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

el.classList.add("reveal");

revealObserver.observe(el);

});


/* ==========================================================
   FOCUS AREA AUTO CAROUSEL
========================================================== */

const carousel =
document.querySelector(".focus-track");

const carouselWrapper =
document.querySelector(".focus-carousel");

let animationPaused = false;

if(carousel && carouselWrapper){

carouselWrapper.addEventListener("mouseenter",()=>{

animationPaused = true;

carousel.style.animationPlayState = "paused";

});

carouselWrapper.addEventListener("mouseleave",()=>{

animationPaused = false;

carousel.style.animationPlayState = "running";

});

}


/* ==========================================================
   TOUCH SUPPORT
========================================================== */

let startX = 0;

let currentTranslate = 0;

if(carouselWrapper){

carouselWrapper.addEventListener(

"touchstart",

e=>{

startX = e.touches[0].clientX;

},

{passive:true}

);

carouselWrapper.addEventListener(

"touchmove",

e=>{

const moveX =

e.touches[0].clientX;

const distance =

moveX - startX;

carousel.style.transform =

`translateX(${currentTranslate + distance}px)`;

},

{passive:true}

);

carouselWrapper.addEventListener(

"touchend",

()=>{

carousel.style.transition =

".5s ease";

carousel.style.transform =

"";

setTimeout(()=>{

carousel.style.transition =

"";

},500);

},

{passive:true}

);

}


/* ==========================================================
   HERO PARALLAX
========================================================== */

const hero =
document.querySelector(".hero");

const glowOne =
document.querySelector(".hero-glow-1");

const glowTwo =
document.querySelector(".hero-glow-2");

let ticking = false;

function updateHero(){

const scroll = window.scrollY;

if(glowOne){

glowOne.style.transform =

`translateY(${scroll*.08}px)`;

}

if(glowTwo){

glowTwo.style.transform =

`translateY(${scroll*.12}px)`;

}

ticking = false;

}

window.addEventListener(

"scroll",

()=>{

if(!ticking){

requestAnimationFrame(updateHero);

ticking = true;

}

},

{passive:true}

);


/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const sections =
document.querySelectorAll("section[id]");

const navLinks =
document.querySelectorAll(

".desktop-nav a,.mobile-menu a"

);

const navObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const id =

entry.target.getAttribute("id");

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+id

){

link.classList.add("active");

}

});

});

},

{

threshold:.45

}

);

sections.forEach(section=>{

navObserver.observe(section);

});


/* ==========================================================
   LAZY IMAGE FADE
========================================================== */

const lazyImages =
document.querySelectorAll(

".focus-card img"

);

const imageObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

imageObserver.unobserve(

entry.target

);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});


/* ==========================================================
   PERFORMANCE
========================================================== */

window.addEventListener(

"pageshow",

()=>{

document.body.classList.add("loaded");

}

);


/* ==========================================================
   CONSOLE
========================================================== */

console.log(

"%cZILOGIX Intelligence Platform",

"color:white;font-size:18px;font-weight:bold;"

);

console.log(

"Website Loaded Successfully"

);