function check(){
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var result=document.getElementById('result');
	var quiz=document.getElementById('quiz');
	if (q1=="Javascript") {c++}
	if (q2=="Hyper text transfer protocol") {c++}
	if (q3=="The World Wide Web Consortium") {c++}
	if (q4=="h1") {c++}
	if (q5=="br") {c++}
	quiz.style.display="none";
	
	if (c<=3){
		result.textContent=`That's really atrocious you've got ${c}.out of 5 you need to work hard.`
	}
	else{
		result.textContent=`you've got ${c}.out of 5 That's substantial keep it up!.`
	}
}
