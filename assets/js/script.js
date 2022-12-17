let sectionOne = document.querySelector(".section__one");
let sectionTwo = document.querySelector(".section__two");
let sectionOneLogo = sectionOne.querySelector(".section__its4real");
let sectionOneBike = sectionOne.querySelector(".section__bike");
let sectionOnePosition = sectionOne.getBoundingClientRect().top;
let screenPosition = window.innerHeight;
let shop = document.querySelector(".shop");


window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".header__video").classList.add("show");
    setTimeout(() => {
        document.querySelector(".header__video").style.transition = "0s";
        document.querySelector(".header__logo").classList.add("show");
    }, 500);
    setTimeout(() => {
        document.querySelector(".header__h2").classList.add("show");
    }, 750);
    setTimeout(() => {
        document.querySelector(".buttons").classList.add("show");
    }, 1200);
    setTimeout(() => {
        document.querySelector(".social").classList.add("show");
    }, 1500);
});

window.addEventListener("scroll", () => {
    if(screenPosition > window.scrollY){
        let transform = (((screenPosition) - window.scrollY) / screenPosition );
        let opacity = (((screenPosition - screenPosition / 3) - window.scrollY) / screenPosition );
        let translateY = screenPosition * window.scrollY / 15000;
        let headerVideo = document.querySelector(".header__video");
        headerVideo.style.transform = `scale(${transform})`;
        headerVideo.style.transform += `translateY(-${translateY}%)`
        headerVideo.style.opacity = opacity;
        window.scrollY == 0 ? headerVideo.style.opacity = 1 : '';
    }
    let position = ((window.scrollY + (sectionOne.scrollHeight / 2)) - sectionOne.scrollHeight) / 100;
    let logoOpacity = ((window.scrollY + (sectionOne.scrollHeight / 1.6)) - sectionOne.scrollHeight) / 100;
    let bikeOpacity = ((window.scrollY + (sectionOne.scrollHeight / 2.5)) - sectionOne.scrollHeight) / 100;
    
    sectionOneLogo.style.opacity = logoOpacity;
    sectionOneLogo.style.transform = `translate(-${position}%, -${position}%)`;
    sectionOneBike.style.opacity = bikeOpacity;
    sectionOneBike.style.transform = `translateX(${position}%)`;
});

const addEffect = (entradas) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            if(entrada.target.classList[0] == "platforms"){
                let platforms = sectionOne.querySelector(".platforms").querySelectorAll("img");
                platforms.forEach((platform, index) => {
                    setTimeout(() => {
                        platform.classList.add("show");
                    }, index * 200);
                });
            }
            else {
                entrada.target.classList.add("show");
            }
        }
    });
}
const addSmoothEffect = (entradas) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("show");
        }
    });
}

const observerEffects = new IntersectionObserver(addEffect, {
    root: null,
    rootMargin: "-10%",
    threshold: 1
});

const observerSmoothEffects = new IntersectionObserver(addSmoothEffect, {
    root: null,
    rootMargin: "25%",
    threshold: 0
});
observerEffects.observe(sectionOne.querySelector(".section__h2"));
observerEffects.observe(sectionOne.querySelector(".section__p"));
observerEffects.observe(sectionOne.querySelector(".platforms"));
observerEffects.observe(sectionTwo.querySelector(".section__h3"));
observerEffects.observe(shop.querySelector(".shop__h1--one"));
observerEffects.observe(shop.querySelector(".shop__h1--two"));
observerSmoothEffects.observe(shop.querySelector(".shop__img"));
observerSmoothEffects.observe(sectionTwo.querySelector(".articles__article--one"));
observerSmoothEffects.observe(sectionTwo.querySelector(".articles__article--two"));