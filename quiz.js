$(document).ready(function () {
  var questionNumber;
  var l = 0,
    n = 1;
  var questionBank = new Array();
  var stage = "#game1";
  var stage2 = new Object();
  var questionLock = false;
  var numberOfQuestions;
  var score = 0;
  var lnk = "index.html";
  var data = {
    quizlist: [
      {
        question:
          "قَالَ رَسُوْلُ اللهِ (ص):  طَلَبُ الْعِلْمِ _________  عَلٰى كُلِّ مُسْلِمٍ",
        option1: "فَرِيْضَةٌ",
        option2: "قَائِدَۃٌ",
        option3: "مَکْرُوْھٌ",
        option4: "حَرَامٌ",
      },
      {
        question:
          "قَالَ الْاِمَامُ عَلِیٌّ(ع):  الْعِلْمُ كَنْزٌ عَظِيْمٌ __________ ",
        option1: "لَا يَفْنَى",
        option2: "لَا يَبْقَى",
        option3: "لَا يَرْضَى",
        option4: "لَا يَنْھَى",
      },
      {
        question:
          "قَالَ الْاِمَامُ الرِّضَا (ع): أَوَّلُ عِبَادَةِاللهِ __________ ",
        option1: "مَعْرِفَتُهُ",
        option2: "صَلَاتُہُ",
        option3: "خَوْفُہُ",
        option4: "تَقْوَاہُ",
      },
      {
        question:
          "قَالَ الْاِمَامُ عَلِیٌّ(ع):  __________سُبْحَانَهُ أَعْلَى الْمَعَارِفِ",
        option1: "مَعْرِفَةُ اللهِ",
        option2: "حُکْمُ اللہِ",
        option3: "کَلَامُ اللہِ",
        option4: "عِبَادَۃُ اللہِ",
      },
      {
        question:
          "قَالَ الْاِمَامُ عَلِیٌّ(ع):  الْعَدْلُ أَسَاسٌ بِهِ  __________",
        option1: "قِوَامُ الْعَالَمِ",
        option2: "نِظَامُ الْعَالَمِ",
        option3: "اَصْلُ الْعَالَمِ",
        option4: "وُجُوْدُ الْعَالَمِ",
      },
      {
        question:
          "قَالَ الْاِمَامُ عَلِیٌّ(ع):  إِنَّ الْعَدْلَ _________ سُبْحَانَهُ الَّذِي وَضَعَهُ فِي الْخَلْقِ",
        option1: "مِيزَانُ اللهِ",
        option2: "حِکْمَۃُ اللهِ",
        option3: "قِوَامُ اللهِ",
        option4: "نِظَامُ اللهِ",
      },
      {
        question:
          "قَالَ رَسُوْلُ اللهِ (ص): أَوَّلُ مَا خَلَقَ اللهُ __________ ",
        option1: "نُوْرِي",
        option2: "آدَمَ",
        option3: "الْجَنَّۃَ",
        option4: "جَبْرَئِیْلَ",
      },
      {
        question:
          "قَالَ الْاِمَامُ عَلِیٌّ(ع):  إِنَّ اللهَ [تَعَالَى] بَعَثَ مُحَمَّدًا (ص) _________   لِلْعَالَمِيْنَ",
        option1: "نَذِيْرًا ",
        option2: "بَشِیْرًا ",
        option3: "عَلِیْمًا",
        option4: "حَکِیْمًا",
      },
      {
        question:
          "قَالَ الْاِمَامُ الصَّادِقُ(ع):  إِنَّ الْأَرْضَ __________  إِلَّا وَ فِيْهَا إِمَامٌ",
        option1: "لَا تَخْلُوْ",
        option2: "لَا تَسْلَمْ",
        option3: "لَا تَخْلُدْ",
        option4: "لَا تَنْجُوْ",
      },
      {
        question:
          "قَالَ الْاِمَامُ الرِّضَا(ع):  إِنَّ الْإِمَامَةَ خِلَافَةُ اللهِ وَ خِلَافَةُ الرَّسُوْلِ (ص) وَ _____________",
        option1: "مَقَامُ أَمِيْرِ الْمُؤْمِنِيْنَ (ع)",
        option2: "النَّاسِ",
        option3: "الْاَصْحَابِ",
        option4: "َنْزٌ عَظِیْمٌ",
      },
    ],
  };

  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ranNums = [],
    c = nums.length,
    j = 0;
  while (c--) {
    j = Math.floor(Math.random() * (c + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  for (i = 0; i <= 9; i++) {
    var r = ranNums[i];
    questionBank[r] = new Array();
    questionBank[r][0] = data.quizlist[r].images;
    questionBank[r][1] = data.quizlist[r].question;
    questionBank[r][2] = data.quizlist[r].option1;
    questionBank[r][3] = data.quizlist[r].option2;
    questionBank[r][4] = data.quizlist[r].option3;
    questionBank[r][5] = data.quizlist[r].option4;
  }
  numberOfQuestions = 10;
  displayQuestion();

  function displayQuestion() {
    var rnd = Math.random() * 4;
    rnd = Math.ceil(rnd);
    questionNumber = ranNums[l];
    var q1;
    var q2;
    var q3;
    var q4;

    if (rnd == 1) {
      q1 = questionBank[questionNumber][2];
      q2 = questionBank[questionNumber][3];
      q3 = questionBank[questionNumber][4];
      q4 = questionBank[questionNumber][5];
    }
    if (rnd == 2) {
      q2 = questionBank[questionNumber][2];
      q3 = questionBank[questionNumber][3];
      q1 = questionBank[questionNumber][4];
      q4 = questionBank[questionNumber][5];
    }
    if (rnd == 3) {
      q3 = questionBank[questionNumber][2];
      q1 = questionBank[questionNumber][3];
      q2 = questionBank[questionNumber][4];
      q4 = questionBank[questionNumber][5];
    }
    if (rnd == 4) {
      q4 = questionBank[questionNumber][2];
      q1 = questionBank[questionNumber][3];
      q2 = questionBank[questionNumber][4];
      q3 = questionBank[questionNumber][5];
    }
    $(stage).append(
      '</div><br><br><div class="questionText"><p>' +
        n +
        ". " +
        questionBank[questionNumber][1] +
        '</p></div><div id="1" class="option">' +
        q1 +
        '</div><div id="2" class="option">' +
        q2 +
        '</div><div id="3" class="option">' +
        q3 +
        '</div><div id="4" class="option">' +
        q4 +
        "</div>"
    );

    $(".option").click(function () {
      if (questionLock == false) {
        questionLock = true;
		//right answer
        if (this.id == rnd) {
          document.getElementById(this.id).style.background = "green";
          score++;
        }
        //wrong answer
        if (this.id != rnd) {          
          document.getElementById(this.id).style.background = "red";
          document.getElementById(rnd).style.background = "green";
        }
        setTimeout(function () {
          changeQuestion();
        }, 2000);
      }
    });
  } //display question

  function changeQuestion() {
    n++;
    l++;
    questionNumber = ranNums[l];
    if (stage == "#game1") {
      stage2 = "#game1";
      stage = "#game2";
    } else {
      stage2 = "#game2";
      stage = "#game1";
    }

    if (l < numberOfQuestions) {
      displayQuestion();
    } else {
      displayFinalSlide();
    }

    $(stage2).animate({ right: "+=1300px" }, "slow", function () {
      $(stage2).css("right", "-1300px");
      $(stage2).empty();
    });
    $(stage).animate({ right: "+=1300px" }, "slow", function () {
      questionLock = false;
    });
  } //change question

  function displayFinalSlide() {
    var snd = new Audio("SALWAT.mp3");
    snd.play();
    $(stage).append(
      '<img style="background: white" class="imgs" src="Images/Darood.png"><br><div class="resultText">Total questions: ' +
        numberOfQuestions +
        "<br>Correct answers: " +
        score +
        '<br><br><b style="color:yellow">Score Marks: ' +
        score * +10 +
        "</b><br><br><a href=" +
        lnk +
        '><img id="tryAgain" src="Images/start-again.png"><a/></div>'
    );
  } //display final slide
}); //doc ready
