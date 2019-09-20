// Color

// Dom variables
const p_txtDescription = document.querySelector('#txtDescription');
const img_colorCar = document.querySelector("#colorCar");
const p_colorName = document.querySelector("#colorName");
const p_colorPrice = document.querySelector("#colorPrice");
const img_dotRed = document.querySelector("#dotRed");
const img_dotBlue = document.querySelector("#dotBlue");
const img_dotGrey = document.querySelector("#dotGrey");
const img_dotColor = document.querySelector("#dotColor");
const p_totalColor = document.querySelector("#totalColor");
const p_numberIdColor = document.querySelector("#numberIdColor");
const p_letterIdColor = document.querySelector("#letterIdColor");

var kwh1 = window.localStorage.getItem('kwh');
var type1 = window.localStorage.getItem('type');
var totalPriceCar1 = window.localStorage.getItem('totalPriceCar');

var ourRequest = new XMLHttpRequest();
ourRequest.open('Get', '../package.json');
ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  p_totalColor.innerHTML = "$" + (totalPriceCar1 / 1000).toFixed(3);
  p_txtDescription.innerHTML = ourData.data.color.description;
  p_numberIdColor.innerHTML = kwh1 + "&nbsp;";
  p_letterIdColor.innerHTML = type1;

  
  img_dotRed.addEventListener('click', function(){
    img_colorCar.src = "img/4.png";
    img_dotColor.src = "img/dot-red.png";
    img_dotRed.src = "img/dot-red-on.png";
    img_dotBlue.src = "img/dot-blue-off.png";
    img_dotGrey.src = "img/dot-grey-off.png";
    p_colorName.innerHTML = ourData.data.color.items[0].label;
    p_colorPrice.innerHTML = "Included";
    p_totalColor.innerHTML = "$" + (totalPriceCar1 / 1000).toFixed(3);
    
    window.localStorage.setItem('colorPrice', ourData.data.color.items[0].price);
    window.localStorage.setItem('totalPriceCar', (ourData.data.engine.items[0].price + totalPriceCar1));

    window.localStorage.setItem('colorId', ourData.data.color.items[0].id);

  });

  img_dotBlue.addEventListener('click', function(){
    img_colorCar.src = "img/5.png";
    img_dotColor.src = "img/dot-blue.png";
    img_dotRed.src = "img/dot-red-off.png";
    img_dotBlue.src = "img/dot-blue-on.png";
    img_dotGrey.src = "img/dot-grey-off.png";
    p_colorName.innerHTML = ourData.data.color.items[1].label;
    p_colorPrice.innerHTML = ourData.data.color.items[1].price;
    p_totalColor.innerHTML = "$" + ((Number(totalPriceCar1) + Number(ourData.data.color.items[1].price)) / 1000 ).toFixed(3);
    
    window.localStorage.setItem('colorPrice', ourData.data.color.items[1].price);
    window.localStorage.setItem('totalPriceCar', (Number(totalPriceCar1) + Number(ourData.data.color.items[1].price)));

    window.localStorage.setItem('colorId', ourData.data.color.items[1].id);
  });

  img_dotGrey.addEventListener('click', function(){
    img_colorCar.src = "img/6.png";
    img_dotColor.src = "img/dot-grey.png";
    img_dotRed.src = "img/dot-red-off.png";
    img_dotBlue.src = "img/dot-blue-off.png";
    img_dotGrey.src = "img/dot-grey-on.png";
    p_colorName.innerHTML = ourData.data.color.items[2].label;
    p_colorPrice.innerHTML = ourData.data.color.items[2].price;
    p_totalColor.innerHTML = "$" + ((Number(totalPriceCar1) + Number(ourData.data.color.items[2].price)) / 1000 ).toFixed(3);
    
    window.localStorage.setItem('colorPrice', ourData.data.color.items[2].price);
    window.localStorage.setItem('totalPriceCar', (Number(totalPriceCar1) + Number(ourData.data.color.items[2].price)));

    window.localStorage.setItem('colorId', ourData.data.color.items[2].id);
  });

// End of Color
};
ourRequest.send();
