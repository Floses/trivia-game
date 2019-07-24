$(document).ready(function() {
  // declaring a variable to clear our time whenver we need it
  var clearTime = clearTimeout();
  // this boolean will tell us whether the time is on or not
  var timeOn = false;
  // this variable is if the timer reachers zero
  var timeRunOut = false;
  // setting a variable called timer to 20 for 20 seconds of time
  var timer = 20;
  // this is our test object. Inside this object we have all of the questions, answer options, and answers for the program
  var test = {
    questions: {
      q1: "Which number should come next in the pattern? 37, 34, 43, 40...",
      q2:
        "Find the answer that best completes the analogy: Book is to Reading as Fork is to:",
      q3:
        "Find two words, one from each group, that are the closest in meaning: Group A - talkative, job, ecstatic / Group B - angry, wind, loquacious",
      q4:
        "Which of the following can be arranged into a 5-letter English word?",
      q5: "What number best completes the analogy: 96 is to 8 as 120 is to ..."
    },
    options: {
      q1: ["25", "31", "49", "37"],
      q2: ["drawing", "writing", "stirring", "eating"],
      q3: [
        "talkative and wind",
        "job and angry",
        "talkative and loquacious",
        "ecstatic and angry"
      ],
      q4: ["H R G S T", "R I L S A", "T O M M T", "W Q R G S"],
      q5: ["8", "12", "4", "10"]
    },
    answers: {
      q1: "49",
      q2: "eating",
      q3: "talkative and loquacious",
      q4: "R I L S A",
      q5: "10"
    }
  };
  // this function will be called upon to decrease our timer and show the time on our html
  function countDown() {
    timer--;

    $(".title").html("Time:" + timer);
  }
  // this function starts the game by displaying a welcome message and then taking it away
  function startGame() {
    $(".questions").append("<h1 id='welcome'>Welcome to IQ test!</h1>");
    setTimeout(function() {
      $(".questions").replaceWith("<h3>" + test.questions.q1 + "</h3>");
    }, 4000);
  }
  // this function will display our first question
  function question1() {
    setTimeout(function() {
      $(".num1").append(
        "<button type='button' class='btn btn-primary'>" +
          test.options.q1[0] +
          "</button>"
      );
    }, 4000);
    $(".num1").on("click", function() {
      $(".gameArea").append(
        "<h1>Sorry! The answer was:</h1>" + test.options.q1[2]
      );
      clearTime;
      $(".title").replaceWith("");
      timeOn = false;
    });
    setTimeout(function() {
      $(".num2").append(
        "<button type='button' class='btn btn-primary'>" +
          test.options.q1[1] +
          "</button>"
      );
    }, 4000);
    $(".num2").on("click", function() {
      $(".gameArea").append(
        "<h1>Sorry! The answer was:</h1>" + test.options.q1[2]
      );
      clearTime;
      $(".title").replaceWith("");
      timeOn = false;
    });
    setTimeout(function() {
      $(".num3").append(
        "<button type='button' class='btn btn-primary'>" +
          test.options.q1[2] +
          "</button>"
      );
    }, 4000);
    $(".num3").on("click", function() {
      $(".gameArea").append("<h1>Nice Job!</h1>");
      clearTime;
      $(".title").replaceWith("");
      timeOn = false;
    });
    setTimeout(function() {
      $(".num4").append(
        "<button type='button' class='btn btn-primary'>" +
          test.options.q1[3] +
          "</button>"
      );
    }, 4000);
    $(".num4").on("click", function() {
      $(".gameArea").append(
        "<h1>Sorry! The answer was:</h1>" + test.options.q1[2]
      );
      clearTime;
      $(".title").replaceWith("");
      timeOn = false;
    });
  }
  // this function starts the timer for the game
  function timerStart() {
    if (!timeOn) {
      setTimeout(function() {
        interval = setInterval(countDown, 1000);
        timeOn = true;
      }, 4000);
    }
  }

  startGame();
  question1();
  timerStart();
});
