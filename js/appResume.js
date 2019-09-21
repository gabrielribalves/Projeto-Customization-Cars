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
var engineId = window.localStorage.getItem('engineId');
var colorId = window.localStorage.getItem('colorId');
var wheelsId = window.localStorage.getItem('wheelsId');

// local variables
var engineTxt;
var colorTxt;
var colorSrc;
var wheelsTxt;

// AJAX request
var ourRequest = new XMLHttpRequest();
ourRequest.open('Get', 'https://gabrielribalves.github.io/Projeto-Customization-Cars/package.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);

    if(engineId == "1"){
      engineTxt = "75 P - 75 kWh - 275 miles range";
      p_plus1.innerHTML = "Included";
    }else if(engineId == "2"){
      engineTxt = "100 S - 100 kWh - 355 miles range";
      p_plus1.innerHTML = "+$" + (enginePrice / 1000).toFixed(3);
    }else{
      engineTxt = "125 B - 125 kWh - 420 miles range";
      p_plus1.innerHTML = "+$" + (enginePrice / 1000).toFixed(3);
    }
    
    if(colorId == "4"){
      colorTxt = "Metalic Vermilion";
      colorSrc = "img/final-4.png"
      p_plus2.innerHTML = "Included";
    }else if(colorId == "5"){
      colorTxt = "Thunderbolt Blue";
      colorSrc = "img/final-5.png"
      p_plus2.innerHTML = "+$" + (colorPrice / 1000).toFixed(3);
    }else{
      colorTxt = "Space Grey";
      colorSrc = "img/final-6.png"
      p_plus2.innerHTML = "+$" + (colorPrice / 1000).toFixed(3);
    }

    if(wheelsId == "7"){
      wheelsTxt = "20” Silver Metalic";
      p_plus3.innerHTML = "Included";
    }else if(wheelsId == "8"){
      wheelsTxt = "20” Grafitti";
      p_plus3.innerHTML = "+$" + (wheelPrice / 1000).toFixed(3);
    }else{
      wheelsTxt = "22” Performance Carbon";
      p_plus3.innerHTML = "+$" + (wheelPrice / 1000).toFixed(3);
    }
    
    p_startingPrice.innerHTML = "$" + (ourData.data.price / 1000).toFixed(3);
    p_resumeEngine.innerHTML = engineTxt;
    p_resumeColor.innerHTML = colorTxt;
    p_resumeWheels.innerHTML = wheelsTxt;
    //p_finalPrice.innerHTML = "$" + (totalPriceCar3 / 1000).toFixed(3);
    p_finalPrice.innerHTML = "$" + ((Number(ourData.data.price) + Number(enginePrice) + Number(colorPrice) + Number(wheelPrice))/1000).toFixed(3);
    img_veicle.src = colorSrc;

    //End of Events
    };
    // End of AJAX request
ourRequest.send();