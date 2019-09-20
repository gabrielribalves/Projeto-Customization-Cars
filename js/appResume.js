// DOM variables
const p_startingPrice = document.querySelector("#startingPrice");
const p_plus1 = document.querySelector("#plus1");
const p_plus2 = document.querySelector("#plus2");
const p_plus3 = document.querySelector("#plus3");
const p_resumeEngine = document.querySelector("#resumeEngine");
const p_resumeColor = document.querySelector("#resumeColor");
const p_resumeWheels = document.querySelector("#resumeWheels");
const p_finalPrice = document.querySelector("#finalPrice");
const img_veicle = document.querySelector("#veicle")

// Local storage variables
var totalPriceCar3 = window.localStorage.getItem('totalPriceCar');
var enginePrice = window.localStorage.getItem('enginePrice');
var colorPrice = window.localStorage.getItem('colorPrice');
var wheelPrice = window.localStorage.getItem('wheelPrice');

var ourRequest = new XMLHttpRequest();
ourRequest.open('Get', '../package.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    // alert(ourData.data.engine.items[0].type);
      p_startingPrice.innerHTML = "$" + (ourData.data.price / 1000).toFixed(3);
      p_plus1.innerHTML = enginePrice;
      p_plus2.innerHTML = colorPrice;
      p_plus3.innerHTML = wheelPrice;
    //   p_resumeEngine.innerHTML = "";
    //   p_resumeColor.innerHTML = "";
    //   p_resumeWheels.innerHTML = "";
      p_finalPrice.innerHTML = totalPriceCar3;
      // img_veicle.src = ("");


};
ourRequest.send();

// window.onload = function loadPage() {
//   p_startingPrice.innerHTML = "";
//   p_plus1.innerHTML = "";
//   p_plus2.innerHTML = "";
//   p_plus3.innerHTML = "";
//   p_resumeEngine.innerHTML = "";
//   p_resumeColor.innerHTML = "";
//   p_resumeWheels.innerHTML = "";
//   p_finalPrice.innerHTML = "";
//   img_veicle.src = ("img/")
// }

// End of Resume
