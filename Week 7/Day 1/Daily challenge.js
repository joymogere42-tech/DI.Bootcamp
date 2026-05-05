const express = require("express");
const app = express();

app.use(express.json());

/* -------------------------
    QUIZ DATA (hard-coded)
--------------------------*/
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

/* -------------------------
   🎮 GAME STATE
--------------------------*/
let currentIndex = 0;
let score = 0;

/* -------------------------
    START / GET QUESTION
--------------------------*/
app.get("/quiz", (req, res) => {
  if (currentIndex >= triviaQuestions.length) {
    return res.send("Quiz finished! Go to /quiz/score");
  }

  res.json({
    question: triviaQuestions[currentIndex].question
  });
});

/* -------------------------
    SUBMIT ANSWER
--------------------------*/
app.post("/quiz", (req, res) => {
  if (currentIndex >= triviaQuestions.length) {
    return res.send("Quiz already finished!");
  }

  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentIndex].answer;

  let feedback = "";

  if (userAnswer && userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = " Correct!";
  } else {
    feedback = ` Wrong! Correct answer is: ${correctAnswer}`;
  }

  currentIndex++;

  if (currentIndex < triviaQuestions.length) {
    return res.json({
      feedback,
      nextQuestion: triviaQuestions[currentIndex].question
    });
  } else {
    return res.json({
      feedback,
      message: "🎉 Quiz finished! Go to /quiz/score"
    });
  }
});

/* -------------------------
    FINAL SCORE
--------------------------*/
app.get("/quiz/score", (req, res) => {
  res.json({
    score: `${score} / ${triviaQuestions.length}`
  });
});

/* -------------------------
    START SERVER
--------------------------*/
app.listen(3000, () => {
  console.log("Quiz game running on http://localhost:3000");
});