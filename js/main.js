var elForm = document.querySelector('.js-form');
var elInp = document.querySelector('.js-inp');
var elBtn = document.querySelector('.js-btn');
var elResult1 = document.querySelector('.js-result1');
var elResult2 = document.querySelector('.js-result2');
var elResult3 = document.querySelector('.js-result3');
var elResult4 = document.querySelector('.js-result4');

var elPiyoda = 3.6;
var elVelik = 20.1;
var elMshina = 70;
var elsamolyot = 800;


elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  elResult1.textContent = (elInp.value / elPiyoda).toFixed(2);
  elResult2.textContent = (elInp.value / elVelik).toFixed(2);
  elResult3.textContent = (elInp.value / elMshina).toFixed(2);
  elResult4.textContent = (elInp.value / elsamolyot).toFixed(2);

});