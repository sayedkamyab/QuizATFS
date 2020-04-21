$(document).ready(function () {	
var questionNumber;
var l=0, n=1;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
var lnk = "index.html";
var data = {"quizlist":[  
	{
	"images":"Images/Qaem.jpg",
	"question":". From which place will Imam Mehdi(atfs) reappear?",
	"option1":"Mecca",
	"option2":"Najaf",
	"option3":"Medina",
	"option4":"Karbala"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Who was Hakima Khatoon(sa)?",
	"option1":"Daughter of Imam Jawad(as)",
	"option2":"Mother of Imam Mehdi(atfs)",
	"option3":"Sister of Imam Hasan Askari(as)",
    "option4":"Aunt of Imam Mehdi(atfs)"	
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Imam Mehdi(atfs) birth is compared to which prophet?",
	"option1":"Hazrat Musa(as)",
	"option2":"Hazrat Isa(as)",
	"option3":"Hazrat Nuh(as)",
	"option4":"Hazrat Yusuf(as)"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". In which city was Imam Mehdi(atfs) born?",
	"option1":"Samarra",
	"option2":"Najaf",
	"option3":"Medina",
	"option4":"Syria"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Which day is our action put in front of our Imam(atfs)?",
	"option1":"Thursday",
	"option2":"Sunday",
	"option3":"Friday",
	"option4":"Wednesday"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Name the dua to be recite every morning related to Imam Mehdi(atfs)?",
	"option1":"Dua Ahad",
	"option2":"Dua Faraj",
	"option3":"Dua Nudbha",
	"option4":"Dua Iftetah"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Imam Mehdi(atfs) longevity is compared to which prophet?",
	"option1":"Hazrat Nuh(as)",
	"option2":"Hazrat Yunus(as)",
	"option3":"Hazrat Ibrahim(as)",
	"option4":"Hazrat Adam(as)"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". At what age did Imam Mehdi(atfs) attained Imamate?",
	"option1":"5 years",
	"option2":"22 years",
	"option3":"13 years",
	"option4":"18 years"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Which prophet will pray Namaz behind Imam Mehdi(atfs)??",
	"option1":"Hazrat Isa(as)",
	"option2":"Hazrat Musa(as)",
	"option3":"Hazrat Khizr(as)",
	"option4":"Hazrat Ibrahim(as)"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Name the dua to be recite friday morning related to Imam Mehdi(atfs)?",
	"option1":"Dua Nudbha",
	"option2":"Dua Faraj",
	"option3":"Dua Ahad",
	"option4":"Dua Iftetah"
	}
]
}		 
 		//$.getJSON('activity.json', function(data) {
			var nums = [0,1,2,3,4,5,6,7,8,9],
            ranNums = [],
            c = nums.length,
            j = 0;
            while (c--) {
            j = Math.floor(Math.random() * (c+1));
            ranNums.push(nums[j]);
            nums.splice(j,1);
           }
		for(i=0;i<=4;i++){		
			var r = ranNums[i];
			questionBank[r]=new Array;
			questionBank[r][0]=data.quizlist[r].images;
			questionBank[r][1]=data.quizlist[r].question;
			questionBank[r][2]=data.quizlist[r].option1;
			questionBank[r][3]=data.quizlist[r].option2;
			questionBank[r][4]=data.quizlist[r].option3;			
			questionBank[r][5]=data.quizlist[r].option4;
		}
		 numberOfQuestions=5; 				
		displayQuestion();
		//})//gtjson
 
function displayQuestion(){
 var rnd=Math.random()*4;
rnd=Math.ceil(rnd);
questionNumber = ranNums[l];
 var q1;
 var q2;
 var q3;
 var q4;

 if(rnd==1){q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];q3=questionBank[questionNumber][4];q4=questionBank[questionNumber][5];}
 if(rnd==2){q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q1=questionBank[questionNumber][4];q4=questionBank[questionNumber][5];}
 if(rnd==3){q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q2=questionBank[questionNumber][4];q4=questionBank[questionNumber][5];}
 if(rnd==4){q4=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q2=questionBank[questionNumber][4];q3=questionBank[questionNumber][5];}
$(stage).append('<img class="imgs" src='+questionBank[questionNumber][0]+'></div><br><br><div class="questionText"><b>'+n+''+questionBank[questionNumber][1]+'</b></div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="4" class="option">'+q4+'</div>');

 $('.option').click(function(){	 
  if(questionLock==false){questionLock=true;	
  //correct answer
  if(this.id==rnd){   
   document.getElementById(this.id).style.background = "green";
   score++;
   }
  //wrong answer	
  if(this.id!=rnd)
  {
   // $(stage).append('<div class="feedback2 clear">WRONG</div>');
   document.getElementById(this.id).style.background = "red";
   document.getElementById(rnd).style.background = "green";
  }
  setTimeout(function(){changeQuestion()},2000);
 }})
}//display question

	function changeQuestion(){
		n++;
		l++;
		questionNumber = ranNums[l];
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(l<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 $(stage2).animate({"right": "+=1300px"},"slow", function() {$(stage2).css('right','-1300px');$(stage2).empty();});
	 $(stage).animate({"right": "+=1300px"},"slow", function() {questionLock=false;});
	}//change question
	
	function displayFinalSlide(){
		var snd = new Audio("SALWAT.mp3");
	    snd.play();
		$(stage).append('<img style="background: white" class="imgs" src="Images/Darood.png"><br><div class="questionText">Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'<br><br><b style="color:yellow">Score Marks: '+score*+10+'</b><br><br><a href='+lnk+'><img id="tryAgain" src="Images/start-again.png"><a/></div>');		
	}//display final slide	
	});//doc ready