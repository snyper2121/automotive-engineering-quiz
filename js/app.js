$( document ).ready(function() {
   // console.log( "ready!" );
   	
	var questionList = [
   	"What is the effect of having too much camber in the tires?",
   	"If the air to fuel mixture in a spark ignition engine is too rich, then air to fuel ratio is about",
   	"The function of an alternator in an automobile is to:",
   	"The main function of the intake manifold is that it",
   	"What is the ideal air to fuel ratio (AFR) in a conventional gas engine?"
];
	
	var questionArray = [
	{
		question:"What is the effect of having too much camber in the tires?",
		a:"Too much traction",
	  	b:"Uneven tire wear",
	  	c:"Hard Steering",
	  	d:"Excessive steering alignment torque",
		rightAnswer: "b",
	  	keyName: "valuename",
	  	questionNumber: 1
	  	//image: //write the image url for each one
	},
	{
		question:"If the air to fuel mixture in a spark ignition engine is too rich, then air to fuel ratio is about",
		a:"15:1",
	  	b:"13:1",
	  	c:"17:1",
	  	d:"10:1",
		rightAnswer: "d",
	  	keyName: "valuename",
	  	questionNumber: 2
	},
	{
		question:"The function of an alternator in an automobile is to:",
		a:"Partly convert engine power into electric power",
	  	b:"Continually recharge the battery",
	  	c:"Supply electric power",
	  	d:"Convert mechanical energy into electrical energy",
		rightAnswer: "b",
	  	keyName: "valuename",
	  	questionNumber: 3
	},
	{
		question:"The main function of the intake manifold is that it",
		a:"Distribute intake air equally to the cylinders",
	  	b:"Promotes the mixture of air and fuel",
	  	c:"Reduces intake noise",
	  	d:"Cools the intake air to a suitable temperature",
		rightAnswer: "a",
	  	keyName: "valuename",
	  	questionNumber: 4
	},
	{
		question:"What is the ideal air to fuel ratio (AFR) in a conventional gas engine?",
		a:"12.3:1",
	  	b:"15.5:2",
	  	c:"14.7:1",
	  	d:"10.5:1",
		rightAnswer: "c",
	  	keyName: "valuename",
	  	questionNumber: 5
	}
	];

	function loadQuestionAnswersForIndex(index) {
		if (index > questionArray.length -1) {
			return "This index does not exist for this array.";
		}
		document.getElementById('firstQuestion').innerHTML = questionArray[index].question;
		document.getElementById('a').innerHTML = questionArray[index].a;
		document.getElementById('b').innerHTML = questionArray[index].b;
		document.getElementById('c').innerHTML = questionArray[index].c;
		document.getElementById('d').innerHTML = questionArray[index].d;
		document.getElementById('current-question-number').innerHTML = questionArray[index].questionNumber;
};
		
	var gameState = {
		score: 0,
   		currentQuestion: 1,
	}

	loadQuestionAnswersForIndex(0);


	$("#answerOptions").click(function(event) {
		console.log(event);
		checkNewAnswer(event);
		advanceToNextQuestion();
	}); 


	function checkNewAnswerAndAdvance() {
		console.log(gameState);
		if(gameState.currentQuestion > 5) {
			console.log('You have finished the game!');
			return;
			
		}

		else if(event.target.id === questionArray[gameState.currentQuestion].rightAnswer) {
			gameState.score = gameState.score + 20;
		} 

			document.getElementById('score-number').innerHTML = gameState.score;


			gameState.currentQuestion = gameState.currentQuestion + 1;
			

			loadQuestionAnswersForIndex(gameState.currentQuestion);
	}

	function checkNewAnswer(event) {

		if(event.target.id === questionArray[gameState.currentQuestion - 1].rightAnswer){
			gameState.score = gameState.score + 20;
			document.getElementById('score-number').innerHTML = gameState.score;
		}
	}

	function advanceToNextQuestion() {
		if(gameState.currentQuestion < 5){
			gameState.currentQuestion = gameState.currentQuestion + 1;
			loadQuestionAnswersForIndex(gameState.currentQuestion -1);
		} else {
			$('body').html('<div class="centeredEnding">You have finished the game!<br><br>' + gameState.score + ' points achieved!</div>');
		}
	}


});
