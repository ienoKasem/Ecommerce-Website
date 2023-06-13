const bar = document.getElementById('bar')
var close = document.getElementById('close')

const nav = document.getElementById("navbar")

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}

// ------------ up button ---------

let span = document.querySelector(".Up");
window.onscroll = function () {
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show")

};
span.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    })
})



//----------------------





var tShirts = ["img/products/f1.jpg", "img/products/f2.jpg",
    "img/products/f3.jpg", "img/products/f4.jpg",
    "img/products/f5.jpg", "img/products/f6.jpg",
    "img/products/f7.jpg", "img/products/f8.jpg"];

var cloths = ["img/products/n1.jpg", "img/products/n2.jpg",
    "img/products/n3.jpg", "img/products/n4.jpg",
    "img/products/n5.jpg", "img/products/n6.jpg",
    "img/products/n7.jpg", "img/products/n8.jpg"];
var pcs = ["img/pc/1.jpg", "img/pc/2.jpg",
    "img/pc/3.jpg", "img/pc/4.jpg",
    "img/pc/5.jpg", "img/pc/6.jpg",
    "img/pc/7.jpg", "img/pc/8.jpg",];
var laptops = ["img/laptops/1.jpg", "img/laptops/2.jpg"
    , "img/laptops/3.jpg", "img/laptops/4.jpg"
    , "img/laptops/5.jpg", "img/laptops/6.jpg"
    , "img/laptops/7.jpg", "img/laptops/8.jpg"]

var disp = document.getElementById("pdisplay")


var cloth = document.getElementById("cloths")
var shirts = document.getElementById("shirts")
var pc = document.getElementById("pc")
var lap = document.getElementById("lap")
var spanCart = document.getElementById("counterLg")
var navCart = document.getElementById("lg-bag")


var cartCounter = 0;

function addTocart() {


    cartCounter++;
    spanCart.innerText = cartCounter;
    if (cartCounter != 0) {
        navCart.classList.add("counterActive")

    }
}


lap.addEventListener("click", function () {

    disp.innerHTML = ""
    for (let index = 0; index < laptops.length; index++) {

        disp.innerHTML += `<div class="pro">
        <img src=${laptops[index]} alt="">
        <div class="des">
            <span>Microsoft</span>
            <h5>New Set up</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$78</h4>
        </div>
        <a onclick="addTocart()"><i class="fal fa-shopping-cart cart"></i></a>
        </div>`


    }


})


pc.addEventListener("click", function () {

    disp.innerHTML = ""
    for (let index = 0; index < pcs.length; index++) {

        disp.innerHTML += `<div class="pro">
        <img src=${pcs[index]} alt="">
        <div class="des">
            <span>Nividia</span>
            <h5>New Set up</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$78</h4>
        </div>
        <a onclick="addTocart()"><i class="fal fa-shopping-cart cart"></i></a>
        </div>`


    }


})



shirts.addEventListener("click", function () {

    disp.innerHTML = ""
    for (let index = 0; index < tShirts.length; index++) {

        disp.innerHTML += `<div class="pro">
        <img src=${tShirts[index]} alt="">
        <div class="des">
            <span>adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$78</h4>
        </div>
        <a onclick="addTocart()"><i class="fal fa-shopping-cart cart"></i></a>
        </div>`


    }


})

cloth.addEventListener("click", function () {
    disp.innerHTML = ""

    for (let index = 0; index < cloths.length; index++) {

        disp.innerHTML += `<div class="pro">
        <img src=${cloths[index]} alt="">
        <div class="des">
            <span>adidas</span>
            <h5>Cartoon Astronaut T-Shirts</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$78</h4>
        </div>
        <a onclick="addTocart()"><i class="fal fa-shopping-cart cart"></i></a>
        </div>`


    }


})

/*--------------------------Slider------------*/

var slider = document.querySelector(".image-slider")
var arrLeft = document.querySelector(".arrow-left")
var arrRight = document.querySelector(".arrow-right")
var heading = document.querySelector(".caption h1")
var description = document.querySelector(".caption p")

var images = ["./imgs/laptops/20.jpeg", "./imgs/laptops/10.jpeg", "./imgs/laptops/30.avif"]
var headings = ["New Producs", "New laptops", "Generation 10"]
var descriptions = ["The city that never sleeps", "The city of lights", "Home to the tallest skyscraper"]


var id = 0;

function slide(id) {
    slider.style.backgroundImage = `url(${images[id]})`

    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade')
    }, 550)
    heading.innerText = headings[id]
    description.innerHTML = descriptions[id]

}

setInterval(function name(params) {
    id++;
    if (id > images.length - 1) {
        id = 0;
    }
    slide(id);

}, 3000)

arrLeft.addEventListener("click", () => {
    id--;
    if (id < 0) {
        id = images.length - 1;
    }
    slide(id);
})
arrRight.addEventListener("click", () => {
    id++;
    if (id > images.length - 1) {
        id = 0;
    }
    slide(id);
})

