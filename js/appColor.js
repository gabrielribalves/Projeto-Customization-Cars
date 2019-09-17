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

// Color

// Dom variables
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

img_dotRed.addEventListener('click', function(){
  img_colorCar.src = "img/4.png";
  img_dotColor.src = "img/dot-red.png";
  img_dotRed.src = "img/dot-red-on.png";
  img_dotBlue.src = "img/dot-blue-off.png";
  img_dotGrey.src = "img/dot-grey-off.png";
  p_colorName.innerHTML = "red";
  p_colorPrice.innerHTML = "red";
  p_totalColor.innerHTML = "red";
});
img_dotBlue.addEventListener('click', function(){
  img_colorCar.src = "img/5.png";
  img_dotColor.src = "img/dot-blue.png";
  img_dotRed.src = "img/dot-red-off.png";
  img_dotBlue.src = "img/dot-blue-on.png";
  img_dotGrey.src = "img/dot-grey-off.png";
  p_colorName.innerHTML = "blue";
  p_colorPrice.innerHTML = "blue";
  p_totalColor.innerHTML = "blue";
});
img_dotGrey.addEventListener('click', function(){
  img_colorCar.src = "img/6.png";
  img_dotColor.src = "img/dot-grey.png";
  img_dotRed.src = "img/dot-red-off.png";
  img_dotBlue.src = "img/dot-blue-off.png";
  img_dotGrey.src = "img/dot-grey-on.png";
  p_colorName.innerHTML = "grey";
  p_colorPrice.innerHTML = "grey";
  p_totalColor.innerHTML = "grey";
});

// End of Color

// Wheels