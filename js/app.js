$(document).ready(function(){
	
	/*---Start Screen--*/

	$(".start-button").mouseover(function() {
		console.log("this works");
		$(this).addClass('hover');
	});

	$(".start-button").mouseleave(function() {
		$(this).removeClass('hover');
	});


  	/*---Visual Effects--*/	

  	$(".individual-ans").mouseover(function() {
		$(this).addClass('hover');
	});

	$(".individual-ans").mouseleave(function() {
		$(this).removeClass('hover');
	});


	/*---Quiz Set-up--*/

	function Question(q, a1, a2, a3, a4, ans) {
	 
	 	this.q=q;
	 	this.a1=a1;
	 	this.a2=a2;
	 	this.a3=a3;
	 	this.a4=a4;
	 	this.ans=ans;
 	}

	var q1 = new Question("Who invented psychohitory?", "Ebling Mis", "Hari Seldon", "Salvador Hardin", "Hober Mallow", "Hari Seldon");
	var q2 = new Question("Who is not a mutant?", "Wolverine", "Superman", "Magneto", "Professor X", "Superman");
	var q3 = new Question("Which of these is similar to Avatar?", "Old man's war", "Radix", "Redshirts", "Doctor Who", "Old man's war");
	var q4 = new Question("Which series won the award for best series?", "LOTR", "Harry Potter", "Foundation", "Rama", "Foundation");
	var q5 = new Question("What did Joss Wheden not direct?", "Avengers", "Serenity", "Firefly", "Equilibrium", "Equilibrium");

	var questionList = [q1, q2, q3, q4, q5];

	/*---Global variables--*/
	var count = 0;
	var currentQuestion = 0
	var correctAns = 0

	/*---Start quiz--*/
	
	$(".start-button").click(function(e) {
		e.preventDefault();
		$("#intro-box").hide();
		$("#quiz-box").fadeIn(400);
		$("#score-box").hide()
		questionGenerator();
		$("#score").text(correctAns);
	

	});
  	
  		/*---Generate question-*/
  	function questionGenerator () {
  		$("#question").text(questionList[currentQuestion].q);
  		$("#answer1").text(questionList[currentQuestion].a1);
  		$("#answer2").text(questionList[currentQuestion].a2);
  		$("#answer3").text(questionList[currentQuestion].a3);
  		$("#answer4").text(questionList[currentQuestion].a4);
  		
  	}	


	$("#next").click(function(e) {
		e.preventDefault();
		currentQuestion++
		console.log(currentQuestion);
		console.log(correctAns);
		if (currentQuestion < 4.5) {
 			questionGenerator();
			$('#next').hide();
			$('.individual-ans').removeClass('incorrect');
			$('.individual-ans').removeClass('correct');
  		}
  		else {
	  		$("#score-box").show()
	  		$("#quiz-box").hide()
	  		$("#actual-score").text(correctAns+ "/5");
	  				
  	}
	


	});

	/*---Question checker-*/

	$(".individual-ans").click(function() {
		var selectedAnswer = $(this).closest("li").text();
	    if (selectedAnswer == questionList[currentQuestion].ans) {			
				$(this).closest('.individual-ans').addClass('correct').removeClass('hover');
				correctAns++;	
				$("#score").text(correctAns);
				$('#next').show()
		}
		else {
				$(this).closest('.individual-ans').addClass('incorrect').removeClass('hover');
				showAnswer ()
				console.log("wrongAnswer");
				$('#next').show()
				
		}

	})		

	function showAnswer () {
		var rightAnswer = questionList[currentQuestion].ans;
		alert("The correct answer is "+rightAnswer)
	}





  	/*---Final score shower-*/	

  


  	/*----Reset----*/
});	

