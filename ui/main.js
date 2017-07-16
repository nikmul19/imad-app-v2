console.log("loaded");
var img=document.getElementById('me');
img.onclick=function()
{
    img.style.marginLeft='1px';
};
/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("nikhil mulchandani");
 /*var userChoice = prompt("Do you choose rock, paper or scissors?");                  //rock paper scissors
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);

function compare(choice1,choice2)
{
    if(choice1===choice2){
  alert( "The result is a tie!");
      userChoice=prompt("select another choice");
      computerChoice = Math.random();
      if (computerChoice < 0.34) {
      	computerChoice = "rock";
      } else if(computerChoice <= 0.67) {
      	computerChoice = "paper";
      } else {
      	computerChoice = "scissors";
      }
      console.log("computer "+computerChoice);
    result=compare(userChoice,computerChoice);
  alert(result);
}
       else if (choice1==="rock"){
        if(choice2==="scissors")return "rock wins";
        if(choice2==="paper")return "paper wins";

    }
    else if(choice1==="paper")
    {
        if(choice2==="scissors")return "scissors wins";
        if(choice2==="rock")return "paper wins";
}
else if(choice1==="scissors")
{
    if(choice2==="paper")return "scissors wins";
    if(choice2==="rock")return "rock wins";
    }
    else if(choice1!="rock" && choice1!="paper" && choice1!="scissors") {
        userChoice=prompt("please select appropriate option");
        console.log(userChoice);
        console.log(computerChoice);
        result=compare(userChoice,computerChoice);
        alert(result);

    }
}

var result=  compare(userChoice,computerChoice);
alert(result);

 function toss()                                         //toss function begins here
 {
   var x=prompt("what's your call?");

   var r1=Math.floor(Math.random() * (2) );

   //alert(" r1 is "+ r1);
   if(r1===0){//alert("It's Heads");
  document.getElementById("heads").style.visibility='visible';
  document.getElementById("tails").style.visibility='hidden';}
   else
   {   //alert("It's Tails");
   document.getElementById("tails").style.visibility='visible';
   document.getElementById("heads").style.visibility='hidden';
}
if(x==="heads"){ if(document.getElementById("heads").style.visibility=='visible'){alert("you won the toss");} else alert("you lost the toss");}
if(x==="tails"){ if(document.getElementById("heads").style.visibility=='hidden'){alert("you won the toss");} else alert("you lost the toss");}
 }
/*
 var n =prompt("enter your name");
 document.write(n);
 alert("hello "+n);
  var age=prompt("enter your age");
  if(age>20)
  {
    alert("you ite");
  }
  else alert("please don't proceed further");
  var person={name:n,agee:age};
  console.log(person.name, person.agee);
  var i=1;
  for (var i = 0; i < 10; i++) {
    document.write(i+" ");
  }
 var greeting= function(name)
 {
   alert("you have won a gift by clicking this button");
 }
 var date = function()
 {
   var d= new Date(2016,6,3,15,50,30,10);
   alert(" value of d is " + d);
   prompt(" the day is " + d.getHours());
 }
 date();

/*
var total=0;
var expenses=0;
var savings;

function sum()
{
  var expenses=document.getElementById("myexpenses").value;
  total=Number(expenses)+Number(total);
  document.getElementById("myexpenses").value="0";
  alert("your expenses have been noted");


}
//var x;
function final()
{
}

function save()
{
  savings=document.getElementById("savings").value;
  total=savings-total;
  alert("your savings for today are:" +total);

}
var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");
ctx.rect(20,20,150,100);
ctx.fill();
ctx.rotate(20*Math.PI/180);
function v()
{
  var vid=document.getElementById("myvideo");
  vid.play();

}

*/
