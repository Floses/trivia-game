$(document).ready(function() {
  var clearTime = clearTimeout();
  var timeOn = false;
  var timeRunOut = false;
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

  function startGame() {
    $(".questions").append("<h1>Welcome to IQ test!</h1>");
    setTimeout(function() {
      $(".questions").replaceWith(test.questions.q1);
    }, 4000);
    $(".answers").append(
      "<button id='btn1'" + test.options.q1[0] + "</button>"
    );
  }

  //startGame();
});
