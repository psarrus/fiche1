// var calcul=10;
// alert(calcul); //10
// calcul=calcul/2;
// alert(calcul); //5
// calcul=calcul*3;
// alert(calcul); //15

function compteur(){

  var varJSCpt = document.getElementById("pCpt");
  var nombre = parseInt(varJSCpt.innerHTML);
  varJSCpt.innerHTML = nombre + 1;

}


function afficherPhoto(obj) {

if(obj.className == "zoomImage"){
  obj.className = "";
}
else{
  obj.className = "zoomImage";
}
}
