import quizQuestions from "./lib/quiz-question.js";
import removeDuplicate from "./lib/remove-duplicate.js";


const uniqueQuestions = removeDuplicate(quizQuestions);


const quiz_title = document.querySelector(".quiz-title");
const answer_a = document.querySelector(".answer_a");
const answer_b = document.querySelector(".answer_b");
const answer_c = document.querySelector(".answer_c");
const answer_d = document.querySelector(".answer_d");
const btn = document.querySelector(".btn");
const answer = document.querySelectorAll(".answer");
const quiz_box = document.querySelector(".quiz_box");
const score_board = document.querySelector(".score_board");
const result = document.querySelector(".result");
const replay_btn = document.querySelector(".replay_btn");

let quizRound = 0;
function loadContent() {
  quiz_title.innerHTML = uniqueQuestions[quizRound].question;
  answer_a.innerHTML = uniqueQuestions[quizRound].options[0];
  const quizIndex = document.querySelector(".quiz_index");
  quizIndex.innerHTML = `${quizRound + 1}/${uniqueQuestions.length}`
  // update the id of options with its index
  answer.forEach((ansEl, index) => {
    ansEl.id = index;
  });
  answer_a.previousElementSibling.value = uniqueQuestions[quizRound].options[0];
  answer_b.innerHTML = uniqueQuestions[quizRound].options[1];
  answer_c.innerHTML = uniqueQuestions[quizRound].options[2];
  answer_d.innerHTML = uniqueQuestions[quizRound].options[3];
}

// Load all the contents once the DOM-content-load successfully
document.addEventListener("DOMContentLoaded", () => {
  loadContent();
});

let score = 0;

// get the selectedId
function getSelected() {
  let checkedAnsId;
  answer.forEach((ans) => {
    if (ans.checked) {
      checkedAnsId = ans.id;
    }
  });

  return checkedAnsId;
}

function undoSelect() {
  //  unchecked all the options
  answer.forEach((ans) => {
    ans.checked = false;
  });
}

btn.addEventListener("click", function () {
  const selectedId = getSelected();
  const correctAnswer = uniqueQuestions[quizRound].correctAnswerIndex;

  // increase the score if the given selectId matches with correctAnswerIndex
  if (correctAnswer === parseInt(selectedId)) {
    score++;
  }

  // stop the game if there is no more questions available
  if (quizRound + 1 > uniqueQuestions.length - 1) {
    displayScoreBoard(score);
    return;
  }
  // continue the game if there is still questions available
  quizRound++;
  // load the new content
  loadContent();
  // uncheck all the options
  undoSelect();
});

function displayScoreBoard(score) {
  quiz_box.classList.add("hidden");
  if (score_board.classList.contains("hidden")) {
    score_board.classList.remove("hidden");
    result.innerHTML = `You have scored ${score} out of ${uniqueQuestions.length}`;
  }
}


// reset everything 
function replay() {
  quiz_box.classList.remove("hidden");
  score_board.classList.add("hidden");
  score = 0;
  quizRound = 0;
  loadContent();
  undoSelect();
}


replay_btn.addEventListener("click", replay);
