function submitAnswers(){
	var total=6;
	var score=0;


	// Get User Input

	var q1=document.forms["quizForm"]["q1"].value;
	var q2=document.forms["quizForm"]["q2"].value;
	var q3=document.forms["quizForm"]["q3"].value;
	var q4=document.forms["quizForm"]["q4"].value;
	var q5=document.forms["quizForm"]["q5"].value;
	var q6=document.forms["quizForm"]["q6"].value;


	// Validation (to answer all the questions)

	for(i=1;i<=total;i++){
		if(eval ('q'+i)==null || eval ('q'+i)=='' ){
			alert('You missed the question '+i);
			return false;
		}
	}


	// Answers for the questions in the form

	var answers = ["c","c","b","b","c","a"];


	//Check the correct answers

	for(i=1;i<=total;i++){
		if(eval ('q'+i)==answers[i-1]){
			score++;
			
		}
	}

	//Displaying the results  

	var results=document.getElementById('results');
	results.innerHTML='<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';

	alert('You scored '+score+' out of '+total);

	return false;

}

