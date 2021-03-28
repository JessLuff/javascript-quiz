
    
    var questions = [
        {
            title: "Question 1",
            text: "This is the actual question",
            choices: ["a", "b", "c", "d"],
            answer: "a",
        },{
            title: "Question 2",
            text: "This is the actual question",
            choices: ["a", "b", "c", "d"],
            answer: "b",
        },{
            title: "Question 3",
            text: "This is the actual question",
            choices: ["a", "b", "c", "d"],
            answer: "c",
        },{
            title: "Question 4",
            text: "This is the actual question",
            choices: ["a", "b", "c", "d"],
            answer: "d",
        }
    ];

    var secondsLeft = 60;
    var i=0;
    var currAns;

    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft + " seconds";

          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endQuiz();
          }
      
        }, 1000);  
    }

    function startQuiz(event){
        setTime();
        headEl.textContent = "Quiz starting";
        textEl.textContent = "First question coming up";
        start.style.display = "none";
        b1.style.display = "block";
        b2.style.display = "block";
        b3.style.display = "block";
        b4.style.display = "block";

        i=0;
        nextQues();
    }

    function nextQues(){
        headEl.textContent = questions[i].title;
        textEl.textContent = questions[i].text;
        b1.textContent = questions[i].choices[0];
        b2.textContent = questions[i].choices[1];
        b3.textContent = questions[i].choices[2];
        b4.textContent = questions[i].choices[3];
        currAns = questions[i].answer;

        b1.addEventListener("click", checkAns);
        b2.addEventListener("click", checkAns);
        b3.addEventListener("click", checkAns);
        b4.addEventListener("click", checkAns);
        return;
    }

    function checkAns(event){
        var ans = event.target;

        if (ans.textContent === currAns){
            statusEl.textContent = "Correct";
        }
        else{
            statusEl.textContent = "Wrong";
            secondsLeft = secondsLeft-10;
        }

        i++;
        if(i<4){
            nextQues();
        }
        else{
            endQuiz();
        }

    }


    function endQuiz(){

        headEl.textContent = "Done!";
        var finalScore = secondsLeft;
        textEl.textContent = "Your score is " + finalScore;
        timeEl.style.display = "none";
        start.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
        statusEl.textContent = "Enter initials:";


        var inputEl = document.getElementById("initials");
        var submitEl = document.getElementById("submit");

        inputEl.style.display = "block";
        inputEl.disabled = false;
        submitEl.style.display = "block";
        submitEl.disabled = false;

        submitEl.addEventListener("click", function(event) {
            var highScore = {
                initial: inputEl.value,
                score: finalScore,
            }
            localStorage.setItem("highScore", highScore);
            location.href = "./highscores.html";
        }
        );
    }

    var timeEl = document.querySelector(".time");
    timeEl.textContent = "Start timer";

    var headEl = document.querySelector(".head");
    headEl.textContent = "Javascript Quiz";

    var textEl = document.querySelector(".text");
    textEl.textContent = "Answer questions on Javascript fundamentals as quickly and accurately as possible. You have 60 seconds, for each incorrect answer a 10 second penalty will be applied. Click Start to begin";

    var statusEl = document.querySelector(".status");




    var start = document.getElementById("start");
    start.addEventListener("click", startQuiz);
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");





