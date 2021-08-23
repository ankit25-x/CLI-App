var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Your name ? ");

console.log("Welcome", userName, "to DO YOU KNOW Ankit");

//highscorelist
var scoreBoard=[{
  name: "Ankit",
  points: 3,
},
{
  name: "Manmita",
  points: 2,
 },
]
//function

function game(question,answer){

  var userAnswer= readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You are correct");
    score=score+1;
  }
  else{
    console.log("You are wrong");
  }
  console.log("Your score is", +score);
}

//game("when is my birthday? ","25 April");

//game("His favorite sport? ","Football");

var questions =[{
  ques: "when is my birthday?",
  ans:"25 April",
},{
  ques : "His favorite sport?",
  ans:"Football",
},{
  ques: "Where do I stay?",
  ans: "Mumbai",
},{
  ques: "My favorite superhero?",
  ans: "Superman",
},{
  ques: "My favorite car?",
  ans: "Lamborghini",
}];

for(var i=0; i<questions.length; i++)
{
  game(questions[i].ques,questions[i].ans);

}

console.log("Thanks for playing...");

var alpha = scoreBoard[0].points;
for(var k=0;k<scoreBoard.length;k++){
  if(scoreBoard[k].points>alpha){
    alpha=scoreBoard[k];
  }
}

if(score>alpha){
  console.log("WOW! NEW HIGH SCORE....please send screenshot of score to update");
}
else{
  console.log("You can do better....Try again!")
}

console.log("check out the list of highscores...")
console.table(scoreBoard);
