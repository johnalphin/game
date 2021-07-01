


document.querySelector("button").addEventListener("click",rollDice);

function rollDice(){


var x=Math.random()
var a=Math.random()
x=(x*6)+1;
a=(a*6)+1;
var y=Math.floor(x);
var b=Math.floor(a);
console.log("dice value is "+y);
console.log("dice value is "+b);
var src=("dice"+y+".png");
var src2=("dice"+b+".png");
var z=document.querySelector("img.img1");
var p=document.querySelector("img.img2");
z.setAttribute("src",src);
p.setAttribute("src",src2);

if(y>b){
  document.querySelector("h1").innerHTML="Player 1 won";
}
else if (y==b) {
  document.querySelector("h1").innerHTML="Draawww";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}
}
