/*function carregaJson(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText.data;
    }
  };
  xhttp.open("GET", "package.json", true);
  xhttp.send();
}

carregaJson();*/

// Engine

// DOM variables
const div_engineBar1 = document.querySelector("#engineBar1");
const div_engineBar2 = document.querySelector("#engineBar2");
const div_engineBar3 = document.querySelector("#engineBar3");
let img_engineCar = document.querySelector("#engineCar");
const p_totalEngine = document.querySelector("#totalEngine");
const p_numberIdEngine = document.querySelector("#numberId");
const span_letterIdEngine = document.querySelector("#letterId");

// div_engineBar1.addEventListener('mouseover',function(){
//   div_engineBar1.style.filter= "grayscale(0) opacity(1)"
//   // p_totalEngine.innerHTML = "json";
// });
// div_engineBar1.addEventListener('mouseout',function(){
//   div_engineBar1.style.filter= "grayscale(100%) opacity(70%)"
//   // p_totalEngine.innerHTML = "json";
// });
div_engineBar1.addEventListener('click',function(){
  div_engineBar1.style.filter= "grayscale(0) opacity(1)";
  div_engineBar2.style.filter= "grayscale(100%) opacity(70%)";
  div_engineBar3.style.filter= "grayscale(100%) opacity(70%)";
  img_engineCar.style.src= "150px";
  // p_totalEngine.innerHTML = "json" ;
  // p_numberIdEngine.innerHTML = "json";
  // span_letterIdEngine.innerHTML = "json";
});

div_engineBar2.addEventListener('click',function(){
  div_engineBar2.style.filter= "grayscale(0) opacity(1)";
  div_engineBar1.style.filter= "grayscale(100%) opacity(70%)";
  div_engineBar3.style.filter= "grayscale(100%) opacity(70%)";
  img_engineCar.style.src= "img/2.png";
  // p_totalEngine.innerHTML = "json" ;
  // p_numberIdEngine.innerHTML = "json";
  // span_letterIdEngine.innerHTML = "json";
});

div_engineBar3.addEventListener('click',function(){
  div_engineBar3.style.filter= "grayscale(0) opacity(1)";
  div_engineBar1.style.filter= "grayscale(100%) opacity(70%)";
  div_engineBar2.style.filter= "grayscale(100%) opacity(70%)";
  img_engineCar.style.src= "../img/3.png";
  // p_totalEngine.innerHTML = "json" ;
  // p_numberIdEngine.innerHTML = "json";
  // span_letterIdEngine.innerHTML = "json";
});
// End of Engine

// Color

// Dom variables
const p_totalColor = document.querySelector("#totalColor");
const p_numberIdColor = document.querySelector("#numberIdColor");
const span_letterIdColor = document.querySelector("#letterIdColor");

// End of Color

// Wheels

// DOM variables
const p_totalWheels = document.querySelector("#totalWheels");
const p_numberIdWheels = document.querySelector("#numberIdWheels");
const span_letterIdWheels = document.querySelector("#letterIdWheels");

// End of Whells

// Resume

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


// End of Resume