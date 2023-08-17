function myFunction(x) {
  x.classList.toggle("change");
}
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu');
let moto = document.querySelector('.moto');
let button = document.querySelector('.header > button');

menu.addEventListener('click',() => {
  navbar.style.display = navbar.style.display == 'flex' ? 'none' : 'flex';
  button.style.display = button.style.display == 'flex' ? 'none' : 'flex';
  if (navbar.style.display == 'flex'){
      moto.style.display = 'none';
  }else{
      moto.style.display = 'block'
  }
})
