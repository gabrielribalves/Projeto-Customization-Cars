// DOM variables Engine
const div_engineBar1 = document.querySelector("#engineBar1");
const div_engineBar2 = document.querySelector("#engineBar2");
const div_engineBar3 = document.querySelector("#engineBar3");
const img_engineCar = document.querySelector("#engineCar");
const p_totalEngine = document.querySelector("#totalEngine");
const p_numberIdEngine = document.querySelector("#numberIdEngine");
const span_letterIdEngine = document.querySelector("#letterIdEngine");
const p_kwh1 = document.querySelector("#kwh1");
const p_kwh2 = document.querySelector("#kwh2");
const p_kwh3 = document.querySelector("#kwh3");
const p_kwhA = document.querySelector("#kwhA");
const p_kwhB = document.querySelector("#kwhB");
const p_kwhC = document.querySelector("#kwhC");
const span_type1 = document.querySelector("#type1");
const span_type2 = document.querySelector("#type2");
const span_type3 = document.querySelector("#type3");
const span_range1 = document.querySelector("#range1");
const span_range2 = document.querySelector("#range2");
const span_range3 = document.querySelector("#range3");
const a_nextFooter = document.querySelector(".nextFooter");
const a_additionalValue0 = document.querySelector("#additionalValue0");
const a_additionalValue1 = document.querySelector("#additionalValue1");
const a_additionalValue2 = document.querySelector("#additionalValue2");

// AJAX request
let ourRequest = new XMLHttpRequest();
ourRequest.open('Get', 'https://gabrielribalves.github.io/Projeto-Customization-Cars/package.json');
ourRequest.onload = function(){
    let ourData = JSON.parse(ourRequest.responseText);
    // Firsts innerHTML
    p_totalEngine.innerHTML = "$" + (ourData.data.price / 1000).toFixed(3);
    p_kwh1.innerHTML = ourData.data.engine.items[0].kwh + "&nbsp;";
    p_kwh2.innerHTML = ourData.data.engine.items[1].kwh + "&nbsp;";
    p_kwh3.innerHTML = ourData.data.engine.items[2].kwh + "&nbsp;";
    p_kwhA.innerHTML = ourData.data.engine.items[0].kwh + "&nbsp;";
    p_kwhB.innerHTML = ourData.data.engine.items[1].kwh + "&nbsp;";
    p_kwhC.innerHTML = ourData.data.engine.items[2].kwh + "&nbsp;";
    span_type1.innerHTML = ourData.data.engine.items[0].type;
    span_type2.innerHTML = ourData.data.engine.items[1].type;
    span_type3.innerHTML = ourData.data.engine.items[2].type;
    span_range1.innerHTML = ourData.data.engine.items[0].range + "&nbsp;";
    span_range2.innerHTML = ourData.data.engine.items[1].range + "&nbsp;";
    span_range3.innerHTML = ourData.data.engine.items[2].range + "&nbsp;";
    
    // Events 
    div_engineBar1.addEventListener('click',function(){
      div_engineBar1.style.filter= "grayscale(0) opacity(1)";
      div_engineBar2.style.filter= "grayscale(100%) opacity(70%)";
      div_engineBar3.style.filter= "grayscale(100%) opacity(70%)";
      img_engineCar.src= "img/1.png";
      a_nextFooter.href= "color.html"
      a_nextFooter.style.opacity = "1"; 
      p_totalEngine.innerHTML = "$" + (ourData.data.price / 1000).toFixed(3);
      p_numberIdEngine.innerHTML = ourData.data.engine.items[0].kwh + "&nbsp;";
      span_letterIdEngine.innerHTML = ourData.data.engine.items[0].type;
      a_additionalValue0.innerHTML = "Included";
      a_additionalValue1.innerHTML = "";
      a_additionalValue2.innerHTML = "";

      window.localStorage.setItem('kwh', ourData.data.engine.items[0].kwh);
      window.localStorage.setItem('type', ourData.data.engine.items[0].type);
      window.localStorage.setItem('enginePrice', ourData.data.engine.items[0].price);
      window.localStorage.setItem('totalPriceCar', (ourData.data.engine.items[0].price + ourData.data.price));
      window.localStorage.setItem('engineId', ourData.data.engine.items[0].id);
    });

    div_engineBar2.addEventListener('click',function(){
      div_engineBar2.style.filter= "grayscale(0) opacity(1)";
      div_engineBar1.style.filter= "grayscale(100%) opacity(70%)";
      div_engineBar3.style.filter= "grayscale(100%) opacity(70%)";
      img_engineCar.src= "img/2.png";
      a_nextFooter.href= "color.html"
      a_nextFooter.style.opacity = "1"; 
      p_totalEngine.innerHTML = "$" + ((63000 + ourData.data.engine.items[1].price) / 1000).toFixed(3);
      p_numberIdEngine.innerHTML = ourData.data.engine.items[1].kwh + "&nbsp;";
      span_letterIdEngine.innerHTML = ourData.data.engine.items[1].type;
      a_additionalValue0.innerHTML = "";
      a_additionalValue1.innerHTML = "+$" + (ourData.data.engine.items[1].price / 1000).toFixed(3);
      a_additionalValue2.innerHTML = "";

      window.localStorage.setItem('kwh', ourData.data.engine.items[1].kwh);
      window.localStorage.setItem('type', ourData.data.engine.items[1].type);
      window.localStorage.setItem('enginePrice', ourData.data.engine.items[1].price);
      window.localStorage.setItem('totalPriceCar', (ourData.data.engine.items[1].price + ourData.data.price));
      window.localStorage.setItem('engineId', ourData.data.engine.items[1].id);
    });
    
    div_engineBar3.addEventListener('click',function(){
      div_engineBar3.style.filter= "grayscale(0) opacity(1)";
      div_engineBar1.style.filter= "grayscale(100%) opacity(70%)";
      div_engineBar2.style.filter= "grayscale(100%) opacity(70%)";
      img_engineCar.src= "img/3.png";
      a_nextFooter.href= "color.html"
      a_nextFooter.style.opacity = "1"; 
      p_totalEngine.innerHTML = "$" + ((63000 + ourData.data.engine.items[2].price) / 1000).toFixed(3);
      p_numberIdEngine.innerHTML = ourData.data.engine.items[2].kwh + "&nbsp;";
      span_letterIdEngine.innerHTML = ourData.data.engine.items[2].type;
      a_additionalValue0.innerHTML = "";
      a_additionalValue1.innerHTML = "";
      a_additionalValue2.innerHTML = "+$" + (ourData.data.engine.items[2].price / 1000).toFixed(3);

      window.localStorage.setItem('kwh', ourData.data.engine.items[2].kwh);
      window.localStorage.setItem('type', ourData.data.engine.items[2].type);
      window.localStorage.setItem('enginePrice', ourData.data.engine.items[2].price);
      window.localStorage.setItem('totalPriceCar', (ourData.data.engine.items[2].price + ourData.data.price));

      window.localStorage.setItem('engineId', ourData.data.engine.items[2].id);
    });
    // End of events
    
  };
// End of AJAX request
ourRequest.send();