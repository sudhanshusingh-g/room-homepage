const menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");
const closeIcon = document.querySelector(".close_icon");
const previous = document.querySelector(".prev");
const next=document.querySelector(".next");
const description = document.getElementById("discover_description");
const mobileImage = document.getElementById("mobile_image");
const desktopImage=document.getElementById("desktop_image");


const mobileSlideImages=[
    "images/mobile-image-hero-1.jpg",
    "images/mobile-image-hero-2.jpg",
    "images/mobile-image-hero-3.jpg",
]

const desktopSlideImages=[
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg",
]

const descriptionTexts=[
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Manufactured with the best materials Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office."
]

let currentSlideIndex=0;


menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

function updateSlide(){
    if(window.innerWidth >=768){
    desktopImage.srcset = desktopSlideImages[currentSlideIndex];
    description.innerText = descriptionTexts[currentSlideIndex];
    }
    mobileImage.src=mobileSlideImages[currentSlideIndex];
    description.innerText=descriptionTexts[currentSlideIndex];
}

next.addEventListener("click",()=>{
    currentSlideIndex=(currentSlideIndex+1)%mobileSlideImages.length;
    updateSlide();
});

previous.addEventListener("click",()=>{
    currentSlideIndex=(currentSlideIndex-1+mobileSlideImages.length)%mobileSlideImages.length;
    updateSlide();
});