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
	"question":". What is the date of birth of Imam Mehdi(atfs)?",
	"option1":"15th Shaban",
	"option2":"21st Rajab",
	"option3":"17th Rabbiul Awwal",
	"option4":"None of the above"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Who is the present Imam_______?",
	"option1":"Imam Mehdi(atfs)",
	"option2":"Imam Baqir(as)",
	"option3":"Imam Zainul Abedeen(as)",
    "option4":"Imam Askari(as)"	
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". What is the kuniyat of Imam Mehdi(atfs)?",
	"option1":"Abul Qasim",
	"option2":"Mujtaba",
	"option3":"Abu Mohammed",
	"option4":"Abul Hasan"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". How many ghaibat's did Imam Mehdi(atfs) have?",
	"option1":"Two",
	"option2":"Three",
	"option3":"Five",
	"option4":"Four"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Who is the mother of Imam Mehdi(atfs)?",
	"option1":"Janabe Narjis(sa)",
	"option2":"Janabe Zehra(sa)",
	"option3":"Janabe Zainab(sa)",
	"option4":"Janabe Hakima Khatoon(sa)"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". What is Ghaibat-e-Sughra?",
	"option1":"Minor occultation",
	"option2":"Major occultation",
	"option3":"Proclamation",
	"option4":"None of above"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". What is Ghaibat-e-Kubra?",
	"option1":"Major occultation",
	"option2":"Minor occultation",
	"option3":"Proclamation",
	"option4":"None of above"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Who is the Holy father of Imam Mehdi(as)?",
	"option1":"Imam Hasan Askari(as)",
	"option2":"Imam Ali(as)",
	"option3":"Imam Hussain(as)",
	"option4":"Imam Hasan(as)"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". Is Imam Mehdi(atfs) alive?",
	"option1":"Yes",
	"option2":"No",
	"option3":"He will be born",
	"option4":"None of the above"
	},
	{
	"images":"Images/Qaem.jpg",
	"question":". What is the title of Imam Mehdi(atfs) in Holy Quran?",
	"option1":"Baqiyatullah",
	"option2":"Qaem",
	"option3":"Muntazar",
	"option4":"Hujjatullah"
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
   //var snd_play = new Audio("tick.mp3");
   //snd_play.play();
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