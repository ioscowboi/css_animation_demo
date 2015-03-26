window.onload= function(){
  function parallax(){
  var cloud = document.getElementById('cloud');
  var cloud1 = document.getElementById('cloud1');
  var cloud2 = document.getElementById('cloud2');
  var sun = document.getElementById('sun');
  var road = document.getElementById('road');
  var car = document.getElementById('car');
  var background1 = document.getElementById('background-1');
  var background2 = document.getElementById('background-2');
  cloud.style.top = -(window.pageYOffset * 3.5)+'px';
  cloud1.style.top = -(window.pageYOffset / 8)+'px';
  cloud2.style.top = -(window.pageYOffset / 2)+'px';
  sun.style.top = (window.pageYOffset / 2)+'px';
  road.style.top = -(window.pageYOffset / 10)+'px';
  car.style.top = -(window.pageYOffset)+'px';
  background1.style.top = -(window.pageYOffset / 3)+'px';
  background2.style.top = -(window.pageYOffset / 6)+'px';
}
window.addEventListener("scroll", parallax, false);
}