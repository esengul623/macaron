// let burger = document.querySelector(".header__burger");
// let menu = document.querySelector('.header__right');

// const clickBurger = ()=>{
//     menu.classList.toggle('active');
// }
let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__right");

const clickBurger = () => {
  menu.classList.toggle("active");
};

let form = document.querySelector(".form");

const clickPopup = () => {
  form.classList.toggle("active");
};

form.addEventListener("click",  (e) =>{
  e.preventDefault();
});
