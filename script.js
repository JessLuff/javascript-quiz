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

    var head = document.createElement("h1");
    head.textContent = "Javascript Quiz";
    document.body.appendChild(head);
    var text = document.createElement("p");
    text.textContent = "Answer questions on Javascript fundamentals as quickly and accurately as possible. You have 60 seconds, for each incorrect answer a 10 second penalty will be applied. Click Start to begin";
    document.body.appendChild(text);

    //var timeEl = document.querySelector(".time");
    // when times runs out changes head, body all?



