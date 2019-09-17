// function carregaJson(){
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML = this.responseText.data;
//     }
//   };
//   xhttp.open("GET", "package.json", true);
//   xhttp.send();
// }
//
// carregaJson();

// Engine

p_total = document.querySelector("#total");
div_engineBar1 = document.querySelector("#engineBar1");
div_engineBar2 = document.querySelector("#engineBar2");
div_engineBar3 = document.querySelector("#engineBar3");
div_engineId = document.querySelector("#engineId");
p_numberId = document.querySelector("#numberId");
span_letterId = document.querySelector("#letterId");

// div_engineBar1.addEventListener('click',function(){
//   p_total.innerHTML = "json" ;

// });
div_engineBar1.addEventListener('mouseover',function(){

  p_total.innerHTML = "json";
});

// div_engineBar2.addEventListener('click',function(){

// });

// div_engineBar3.addEventListener('click',function(){

// });
// End of Engine
