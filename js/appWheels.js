// Wheels

// DOM variables
const img_wheel1 = document.querySelector("#wheel1");
const img_wheel2 = document.querySelector("#wheel2");
const img_wheel3 = document.querySelector("#wheel3");
const p_txtWheels1 = document.querySelector("#txtWheels1");
const p_txtRedWheels1 = document.querySelector("#txtRedWheels1");
const p_txtWheels2 = document.querySelector("#txtWheels2");
const p_txtRedWheels2 = document.querySelector("#txtRedWheels2");
const p_txtWheels3 = document.querySelector("#txtWheels3");
const p_txtRedWheels3 = document.querySelector("#txtRedWheels3");

const p_totalWheels = document.querySelector("#totalWheels");
const img_footerWheel = document.querySelector("#footerWheel");

const img_dotWheels = document.querySelector("#dotWheels");
const p_numberIdWheels = document.querySelector("#numberIdWheels");
const span_letterIdWheels = document.querySelector("#letterIdWheels");


// AJAX request
var ourRequest = new XMLHttpRequest();
ourRequest.open('Get', '../package.json');
ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    p_totalWheels.innerHTML = "$" + ourData.data.price;
    // Events
  img_wheel1.addEventListener("click", function(){
    img_wheel1.style.opacity= "1";
    img_wheel2.style.opacity= "0.4";
    img_wheel3.style.opacity= "0.4";
    img_footerWheel.src = "img/7.png";
    p_txtWheels1.style.display = "block";
    p_txtRedWheels1.style.display = "block";
    p_txtWheels2.style.display = "none";
    p_txtRedWheels2.style.display = "none";
    p_txtWheels3.style.display = "none";
    p_txtRedWheels3.style.display = "none";

    p_totalWheels.innerHTML = "$" + ourData.data.price;
    p_txtWheels1.innerHTML = ourData.data.wheels.items[0].label;
    p_txtRedWheels1.innerHTML = "Included";
  });
  img_wheel2.addEventListener("click", function(){
    img_wheel1.style.opacity= "0.4";
    img_wheel2.style.opacity= "1";
    img_wheel3.style.opacity= "0.4";
    img_wheel2.style.filter= "opacity(1)";
    p_totalWheels.innerHTML = "222";
    img_footerWheel.src = "img/8.png";
    p_txtWheels1.style.display = "none";
    p_txtRedWheels1.style.display = "none";
    p_txtWheels2.style.display = "block";
    p_txtRedWheels2.style.display = "block";
    p_txtWheels3.style.display = "none";
    p_txtRedWheels3.style.display = "none";

    p_totalWheels.innerHTML = "$" + (ourData.data.price + ourData.data.wheels.items[1].price);
    p_txtWheels2.innerHTML = ourData.data.wheels.items[1].label;
    p_txtRedWheels2.innerHTML = ourData.data.wheels.items[1].price;
  });
  img_wheel3.addEventListener("click", function(){
    img_wheel1.style.opacity= "0.4";
    img_wheel2.style.opacity= "0.4";
    img_wheel3.style.opacity= "1";
    p_totalWheels.innerHTML = "333";
    img_footerWheel.src = "img/9.png";
    p_txtWheels1.style.display = "none";
    p_txtRedWheels1.style.display = "none";
    p_txtWheels2.style.display = "none";
    p_txtRedWheels2.style.display = "none";
    p_txtWheels3.style.display = "block";
    p_txtRedWheels3.style.display = "block";

    p_totalWheels.innerHTML = "$" + (ourData.data.price + ourData.data.wheels.items[2].price);
    p_txtWheels3.innerHTML = ourData.data.wheels.items[2].label;
    p_txtRedWheels3.innerHTML = ourData.data.wheels.items[2].price;
  });

};
ourRequest.send();
// End of Whells