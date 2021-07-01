
var userclicked=[];
var x=['red','green','blue','yellow'];
var gamePattern=[];
var started = false;
var level = 0;
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    sequenceGenerator();
    started = true;
  }
});

$(".btn").click(function()
{
var htmlString = $(this).attr("id");
userclicked.push(htmlString);
makeSound(htmlString);
animate(htmlString);
checkAnswer(userclicked.length-1);
console.log(userclicked.length-1);
});

function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userclicked[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userclicked.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          sequenceGenerator();
        }, 1000);

      }

    } else {

      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    $("h1").html("Game Over, Press Any Key to Restart");
    startOver();

    }

}

function sequenceGenerator(){
  userclicked=[];
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);
  var y =Math.random();
  y=y*4;
  y=Math.floor(y);
  var rancolor=[];
  rancolor=(x[y]);
  $("#"+rancolor).fadeOut(100);
  $("#"+rancolor).fadeIn(100);
  makeSound(rancolor);
  gamePattern.push(rancolor);
}

function makeSound(rancolor)
{
  $("#" +rancolor).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio(rancolor+ ".mp3");
  audio.play();
}

function animate(currentColor) {
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver()
{
  gamePattern=[];
  started = false;
  level = 0;
}
