var userclickedpattern=[];
var gamepattern=[];
var buttoncolor=["red","blue","green","yellow"];
var started=false;
var level=0;

$(document).keypress(function(){
	if(!started){
		$("#level-title").text("Level " + level);
		nextSequence();
		started=true;
	}
});

$(".btn").click(function(){
 var userchosencolor=$(this).attr("id");
  userclickedpattern.push(userchosencolor);
  playsound(userchosencolor);

  animatepress(userchosencolor);
  checkans(userclickedpattern.length-1);
});






function checkans(currentlevel){

        if(gamepattern[currentlevel]===userclickedpattern[currentlevel]){
        	

        	if(userclickedpattern.length===gamepattern.length){
        		setTimeout(function(){
        			nextSequence();
        		},1000);
        		}
        	}
         else{
         	
         	playsound("wrong");
             $("body").addClass("game-over");
             $("#level-title").text("Game Over, Press Any Key to Restart");
             setTimeout(function(){
             	$("body").removeClass("game-over");
             },200);
         
             
             
             startover();
        }
    }
        
        function nextSequence(){
          
          userclickedpattern=[];

	level++;
$("#level-title").text("Level " + level);

	var rn=Math.floor(Math.random()*4);

var randomchosencolor=buttoncolor[rn];
gamepattern.push(randomchosencolor);

$("#"+ randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomchosencolor);


}
function animatepress(currentcolor){
 $("#" + currentcolor).addClass("pressed");

 setTimeout(function(){
 	$("#" + currentcolor).removeClass("pressed");
 },100);
}


        function playsound(name){

var audio=new Audio(name+ ".mp3");
audio.play();
}

function startover(){

   level=0;
   gamepattern=[];
   started=false;
}