$(document).ready(function(){
	
	/*--Reset--*/
	var randomNumber = Math.floor(Math.random()*100) +1
		console.log(randomNumber);
  	var guessCount = 0;
  	var guessedNumber;
  	var numberDifference;



	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/*--Game--*/
  	$("#guessButton").click(function(e){
  		e.preventDefault();

  		
  		var guessedNumber = +$('#userGuess').val();
  		
  		if (guessedNumber == 0) {
  			alert ("Please enter a valid number")
  		} else {

  		var numberDifference = guessedNumber-randomNumber;
  		console.log(numberDifference);
  		
  		addGuess(guessedNumber);
  		guessCount++;
  		changeCount(guessCount);

  		hint(numberDifference);
  		resetForm();

  		};
  	});
  	
  	/*--log guesses--*/
  	var addGuess = function (guessedNumber) {

  		$('#guessList').append('<li>' + guessedNumber + '</li>');
	};

	var changeCount = function (guessCount) {
		
		$("#count").text(guessCount);
	};

	var resetForm = function () {
		$('#userGuess').val('');
	};
	

	/*------Giving hints ----- */

	

	var hint = function (numberDifference) {
		

		if (numberDifference> 50 && numberDifference < 100 ) {
			$("h2").text("Ice Cold")	
		} else if (numberDifference >-100 && numberDifference <-50) {
			$("h2").text("Ice Cold")	
		} else if (numberDifference >= 30 && numberDifference <=50) {
			$("h2").text("Cold");
		} else if (numberDifference >= -50 && numberDifference <= -30) {
			$("h2").text("Cold");
		} else if (numberDifference >= 20 && numberDifference < 30) {
			$("h2").text("Warm");
		} else if (numberDifference > -30 && numberDifference <= -20) {
			$("h2").text("Warm");
		} else if (numberDifference >= 10 && numberDifference < 20) {
			$("h2").text("Hot");
		} else if (numberDifference > -20 && numberDifference <= -10) {
			$("h2").text("Hot");
		} else if (numberDifference >= 1 && numberDifference <10) {
			$("h2").text("Very Hot");
		} else if (numberDifference > -10 && numberDifference <= -1) {
			$("h2").text("Very Hot");
		} else if (numberDifference == 0 ) {
			$("h2").text("Bingo!!!");
		} else { 
			alert("Please enter a number between 1 and 100")
		};
	};

		
	/*------new game ----- */

	

	$('.new').click(function(e){
		e.preventDefault()
		randomNumber = Math.floor(Math.random()*100) +1;
		console.log(randomNumber);
		$('#count').text(0);
		$('#guessList').find('li').remove();
		$('h2').text('Make your Guess!');
	});
		


  		
  


});


