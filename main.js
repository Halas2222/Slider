const slideList = [{
         image: "images/img1.jpg",
        text: 'Mountains'
},

{
    image: 'images/img2.jpg',
    text: "Landscape"
},

{
    image: 'images/img3.jpg',
    text: "Calm"   
},

{
    image: 'images/img4.jpg',
    text: "Emotions"
},

{
    image: 'images/img5.jpg',
    text: "Passion"
}]

const images = document.querySelector("img.slider");
const txt = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll("div.dots span")];
const time = 6000;
let active = 0;

const changeDots = () => {
   const activeDots = dots.findIndex(dot => dot.classList.contains('active'));
   dots[activeDots].classList.remove('active');
   dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length){
        active= 0;
    }
    images.src = slideList[active].image;
    txt.textContent = slideList[active].text;
    changeDots()
}

setInterval(changeSlide, time)


