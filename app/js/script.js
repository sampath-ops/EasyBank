const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const fadesInElems = document.querySelectorAll(".fades-in")
let boolean=true;
 menu.addEventListener('click',function(){ 
 if(boolean==true){//hamburger open
     header.classList.add('open');
     body.classList.add('noscroll');
     fadesInElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
     });
     boolean=false;
 }
 else{//hamburger close
    body.classList.remove('noscroll');
    fadesInElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
    header.classList.remove('open');
    boolean=true;
 }
});
