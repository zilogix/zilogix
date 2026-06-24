/* ==========================================
   ZILOGIX
   APP.JS
========================================== */


window.addEventListener("load", () => {

  const preloader =
  document.getElementById("preloader");

  const logo =
  document.getElementById("preloaderLogo");

  const target =
  document.querySelector(".logo");

  setTimeout(() => {
 if(!logo || !target || !preloader) return;
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


  setTimeout(() => {

    preloader.classList.add("hidden");

  },3200);

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

if(navbar){

  window.addEventListener(
    "scroll",
    () => {

      if(window.scrollY > 50){
        navbar.classList.add("scrolled");
      }else{
        navbar.classList.remove("scrolled");
      }

    },
    { passive:true }
  );

}


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if(menuToggle && mobileMenu){

  menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");

  });

}


const mobileLinks =
document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");

  });

});


const seriesData = [

{
  index:"01",
  title:"SpaceX",
  image:"assets/series/spacex.png",
  page:"assets/videoseries/spacex/index.html",
  description:"The company redefining access to space, launch economics and humanity's future beyond Earth."
},

{
  index:"02",
  title:"Tesla",
  image:"assets/series/tesla.png",
  page:"assets/videoseries/tesla/index.html",
  description:"The company accelerating the world's transition toward sustainable energy and intelligent mobility."
},

{
  index:"03",
  title:"Amazon",
  image:"assets/series/amazon.png",
  page:"assets/videoseries/amazon/index.html",
  description:"A logistics and cloud computing giant reshaping modern commerce."
},

{
  index:"04",
  title:"Apple",
  image:"assets/series/apple.png",
  page:"assets/videoseries/apple/index.html",
  description:"The company that transformed consumer technology through design and ecosystem."
},

{
  index:"05",
  title:"Microsoft",
  image:"assets/series/microsoft.png",
  page:"assets/videoseries/microsoft/index.html",
  description:"Building the infrastructure layer powering enterprise software and AI."
},

{
  index:"06",
  title:"NVIDIA",
  image:"assets/series/nvidia.png",
  page:"assets/videoseries/nvidia/index.html",
  description:"The semiconductor company at the center of the AI revolution."
},

{
  index:"07",
  title:"OpenAI",
  image:"assets/series/openai.png",
  page:"assets/videoseries/openai/index.html",
  description:"Building frontier artificial intelligence systems for the future."
}

];
/* ==========================================
   EXPLORATION DATA
========================================== */

const explorationData = [

{
  index:"01",
  title:"Geopolitics",
  image:"assets/explorations/geopolitics.png",
  page:"assets/videoexploration/geopolitics/index.html",
  description:"Understanding how nations compete, cooperate and reshape global order."
},

{
  index:"02",
  title:"Business Studies",
  image:"assets/explorations/businessstudies.png",
  page:"assets/videoexploration/businessstudies/index.html",
  description:"Breaking down strategy, incentives and corporate power structures."
},

{
  index:"03",
  title:"Technology Shift",
  image:"assets/explorations/technologyshift.png",
  page:"assets/videoexploration/technologyshift/index.html",
  description:"Analyzing disruptive technologies transforming industries."
},

{
  index:"04",
  title:"Power Shift",
  image:"assets/explorations/powershift.png",
  page:"assets/videoexploration/powershift/index.html",
  description:"Tracking changes in influence, capital, institutions and nations."
},

{
  index:"05",
  title:"Artificial Intelligence",
  image:"assets/explorations/artificialintelligence.png",
  page:"assetes/videoexploration/artificialintelligence/index.html",
  description:"Understanding frontier AI systems, economics and long-term impact."
},

{
  index:"06",
  title:"Defence",
  image:"assets/explorations/defence.png",
  page:"assets/videoexploration/defence/index.html",
  description:"Studying military technology, deterrence and strategic competition."
}

];


/* ==========================================
   SERIES ELEMENTS
========================================== */

const seriesCard =
document.getElementById("seriesCard");

const seriesIndex =
document.getElementById("seriesIndex");

const seriesTitle =
document.getElementById("seriesTitle");

const seriesImage =
document.getElementById("seriesImage");

const seriesDescription =
document.getElementById("seriesDescription");

const seriesLink =
document.getElementById("seriesLink");
let currentSeries = -1;

/* ==========================================
   EXPLORATION ELEMENTS
========================================== */

const explorationCard =
document.getElementById("explorationCard");

const explorationIndex =
document.getElementById("explorationIndex");

const explorationTitle =
document.getElementById("explorationTitle");

const explorationImage =
document.getElementById("explorationImage");

const explorationDescription =
document.getElementById("explorationDescription");

const explorationLink =
document.getElementById("explorationLink");


let currentExploration = -1;


/* ==========================================
   AUDIO
========================================== */

const transitionSound =
document.getElementById("transitionSound");

let audioUnlocked = false;

function unlockAudio(){

    if(audioUnlocked) return;

    if(!transitionSound) return;

    transitionSound.volume = 0;

    transitionSound.play()
    .then(()=>{

        transitionSound.pause();
        transitionSound.currentTime = 0;

        audioUnlocked = true;

    })
    .catch(()=>{});

}

window.addEventListener(
"pointerdown",
unlockAudio,
{once:true}
);

function playSound(){

    if(!audioUnlocked) return;

    if(!transitionSound) return;

    transitionSound.pause();

    transitionSound.currentTime = 0;

    transitionSound.volume = 0.2;

    transitionSound.play()
    .catch(()=>{});

}

/* ==========================================
   UPDATE SERIES
========================================== */


function updateSeries(index){

  if(index === currentSeries) return;
    if(
    !seriesCard ||
    !seriesIndex ||
    !seriesTitle ||
    !seriesDescription
  ){
    return;
  }

  currentSeries = index;

  const item = seriesData[index];

  seriesCard.classList.add("card-changing");

  setTimeout(() => {

    seriesIndex.textContent =
    item.index;

    seriesTitle.textContent =
    item.title;

    seriesDescription.textContent =
    item.description;

    seriesImage.src =
    item.image;
    if(seriesLink && item.page){
  seriesLink.href = item.page;
}

    seriesCard.classList.remove("card-changing");
    seriesCard.classList.add("card-enter");

    setTimeout(() => {
      seriesCard.classList.remove("card-enter");
    }, 700);

  }, 200);

  playSound();
}


/* ==========================================
   UPDATE EXPLORATION
========================================== */

function updateExploration(index){

  if(index === currentExploration) return;
  if(
  !explorationCard ||
  !explorationIndex ||
  !explorationTitle ||
  !explorationDescription ||
  !explorationImage
){
  return;
}

  currentExploration = index;

  const item = explorationData[index];

  explorationCard.classList.add("card-changing");

  setTimeout(() => {

    explorationIndex.textContent =
    item.index;

    explorationTitle.textContent =
    item.title;

   explorationDescription.textContent =
item.description;
explorationImage.src =
item.image;

/* UPDATE IMAGE */
explorationImage.src =
item.image;

/* UPDATE PAGE LINK */
if(explorationLink && item.page){

  explorationLink.href =
  item.page;

}

    explorationCard.classList.remove("card-changing");
    explorationCard.classList.add("card-enter");

    setTimeout(() => {
      explorationCard.classList.remove("card-enter");
    }, 700);

  }, 200);

  playSound();
}


/* ==========================================
   INTERSECTION OBSERVER
========================================== */

const seriesSteps =
document.querySelectorAll(".scroll-step");

const explorationSteps =
document.querySelectorAll(".exploration-step");


const observer = new IntersectionObserver(

(entries)=>{

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const index =
      Number(
      entry.target.dataset.series
      );

      updateSeries(index);
    }

  });

},

{
  threshold:.55
}

);


seriesSteps.forEach(step => {
  observer.observe(step);
});


const explorationObserver =
new IntersectionObserver(

(entries)=>{

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const index =
      Number(
      entry.target.dataset.exploration
      );

      updateExploration(index);
    }

  });

},

{
  threshold:.55
}

);


explorationSteps.forEach(step => {
  explorationObserver.observe(step);
});


/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealElements =
document.querySelectorAll(
".section,.showcase-card,.footer"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add(
      "active"
      );

    }

  });

},

{
  threshold:.15
}

);


revealElements.forEach(el => {

  el.classList.add("reveal");

  revealObserver.observe(el);

});


/* ==========================================
   IMAGE PARALLAX
========================================== */

const parallaxImages =
document.querySelectorAll(
".showcase-image img"
);

let ticking = false;

function updateParallax(){

  parallaxImages.forEach(img => {

    const rect =
    img.getBoundingClientRect();

    const offset =
    rect.top * -0.04;

    img.style.transform =
    `translateY(${offset}px) scale(1.05)`;

  });

  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {

    if(!ticking){

      requestAnimationFrame(
      updateParallax
      );

      ticking = true;
    }

  },
  { passive:true }
);


/* ==========================================
   INITIAL LOAD
========================================== */

updateSeries(0);
updateExploration(0);

console.log(
"ZILOGIX Intelligence Platform Loaded"
);
