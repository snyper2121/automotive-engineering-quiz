$( document ).ready(function() {
    console.log( "ready!" );
});































var numArray = [1,3,5,7,5];
var someString = "Hello World";

var quizgame = {
	question1: "What color is the sky?"
};

console.log(quizgame.question1);
console.log(quizgame['question1']);

var questionObject = {
	question: "What is the effect of having too much camber in the tires?",
	a:"Too much traction",
  b:"Uneven tire wear",
  c:"Hard Steering",
  d:"Excessive steering alignment torque",
	rightAnswer: "b",
  keyName: "valuename",
  questionNumber: 30
};

var questionArray = [{},{},{},{}];
questionArray.push();
questionArray.pop();
questionArray.length;
questionArray[4];
[10,20,30,40,50];

questionArray[0] === 10;
questionArray.length = 5;

[[1,3,2],[1,2],[1,1]]
var playerArray = [{player: "George",health: 500},{player: "Sam",health: 200}]

var questionArray = [{question: "Who?"}, {question: "What?"}]

question[0].question
question[1].question
question[1].a
question[2].rightAnswer = ;

playerArray[1] => { player: "Sam", health: 200}

playerArray[1].player

playerArray[1]['player'];

var score = 0;

if ( userGuess === questionObject.rightAnswer ){
	score += increment;
	advanceGameToNextQuestion();
}








