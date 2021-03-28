
    
    var question = [
        {
            title: "Question 1",
            choices: ["a", "b", "c", "d"],
            answer: "a",
        },{
            title: "Question 2",
            choices: ["a", "b", "c", "d"],
            answer: "b",
        },{
            title: "Question 3",
            choices: ["a", "b", "c", "d"],
            answer: "c",
        },{
            title: "Question 4",
            choices: ["a", "b", "c", "d"],
            answer: "d",
        }
    ];

    var secondsLeft = 60;

    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft + " seconds";

          if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            timeEl.textContent = "Times up";
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

        runQuiz();
    }

    function runQuiz(){


        b1.addEventListener("click", startQuiz);
        b2.addEventListener("click", startQuiz);
        b3.addEventListener("click", startQuiz);
        b4.addEventListener("click", startQuiz);

        return;
    }


    var timeEl = document.querySelector(".time");
    timeEl.textContent = "Start timer";

    var headEl = document.querySelector(".head");
    headEl.textContent = "Javascript Quiz";

    var textEl = document.querySelector(".text");
    textEl.textContent = "Answer questions on Javascript fundamentals as quickly and accurately as possible. You have 60 seconds, for each incorrect answer a 10 second penalty will be applied. Click Start to begin";

    var start = document.getElementById("start");
    start.addEventListener("click", startQuiz);
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    var b3 = document.getElementById("b3");
    var b4 = document.getElementById("b4");





