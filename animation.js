// Wrap every letter in a span
window.onload = function() {
  var clasess = ["#a1","#a5","#a3","#a2","#a4"]
var letrs =["letters1","letters2","letters3","letters4","letters5"];
var cont = 0;
var verp = document.getElementById("btnn")
function toggle(className, displayState){
    var elements = document.getElementsByClassName(className)

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
    
}

for (var i = 0; i < letrs.length; i++){
  toggle(letrs[i], 'none');
  
}
   verp.addEventListener("click", () => {
 toggle(letrs[cont], 'block'); // Shows

  anime.timeline({loop: false})
  
  .add({
      
    targets:  clasess[cont] ,
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets:  clasess[cont] ,
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 500
  });
 cont++})
}
