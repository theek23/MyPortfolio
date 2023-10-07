let colors =["red","yellow","green","blue","deeppink","orange"];
let divArray = document.querySelector("section").children;

setInterval(function (){
  for(let i=0; i<divArray.length; i++){
    divArray[i].style.background=colors[i];
  }
  let element =colors.pop();
  colors.unshift(element)
},500);
