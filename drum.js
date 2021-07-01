
var length=document.querySelectorAll("button.drum").length;

for(i=0;i<length;i++)
{
document.querySelectorAll("button.drum")[i].addEventListener("click",handleClick);
}
document.addEventListener("keypress",makeSound);


function handleClick()
{
var x=this.innerHTML;
anim(x);

switch (x) {
  case "w":var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":var audio = new Audio("tom-2.mp3");
        audio.play();
        break;

    case "s":var audio = new Audio("tom-3.mp3");
        audio.play();
        break;

    case "d":var audio = new Audio("tom-4.mp3");
        audio.play();
        break;

    case "j":var audio = new Audio("crash.mp3");
        audio.play();
        break;

    case "k":var audio = new Audio("kick-bass.mp3");
        audio.play();
        break;

    case "l":var audio = new Audio("snare.mp3");
        audio.play();
        break;

  default:

}
}
function makeSound(event)
{
var y=event.key;
anim(y);

switch (y) {
  case "w":var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":var audio = new Audio("tom-2.mp3");
        audio.play();
        break;

    case "s":var audio = new Audio("tom-3.mp3");
        audio.play();
        break;

    case "d":var audio = new Audio("tom-4.mp3");
        audio.play();
        break;

    case "j":var audio = new Audio("crash.mp3");
        audio.play();
        break;

    case "k":var audio = new Audio("kick-bass.mp3");
        audio.play();
        break;

    case "l":var audio = new Audio("snare.mp3");
        audio.play();
        break;

  default:

}}

function anim(currentkey)
{
  var but=document.querySelector("."+currentkey);
  but.classList.add("pressed");
  setTimeout(function(){
    but.classList.remove("pressed")
  },100);
}
