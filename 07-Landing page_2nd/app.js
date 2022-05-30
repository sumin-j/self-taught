const imgTop = document.querySelector('.imgTopPart');
const imgBottom = document.querySelectorAll('.imgBottom');
const date = document.querySelector('.date');
const burberry = document.querySelectorAll('.burberry');
const desc = document.querySelector('.desc');
const header = document.querySelector('.header');

burberry.forEach(function(e, index){
    TweenMax.from(e, 1, {y:-20, opacity:0, delay: 0.5 + (index*0.2)})
})

imgBottom.forEach(function(e){
    TweenMax.from(e, 1, {y:20, opacity:0})
})
TweenMax.from(imgTop, 1, {y:20, opacity:0})
TweenMax.from(desc, 1, {x: -20, opacity:0, delay:1.5})
TweenMax.from(date, 1, {x: -20, opacity:0, delay:1.8})
TweenMax.from(header, 1, {x: -10, opacity:0, delay:2})